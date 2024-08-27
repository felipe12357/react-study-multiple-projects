"use client"
import { useStore } from "@/src/store"
import { displayErrors, formatCurrency } from "@/src/utils";
import { useMemo } from "react";
//para poder usar actions desde un client component es necesario crear un archivo aparte\
//este archivo debe tener Use sERVER en la primera linea
import { createOrderAction } from "@/actions/order-actions";
import { OrderSchema, ResultZoadType, ErrorList } from "@/src/utils/formsValidations";
import { toast } from "react-toastify";
import { OrderRequest } from "@/src/models";
import OrderProductDetail from "./orderProductDetail";



const OrderSummary = ()=>{
    //para poder utilizar zustand, el component tiene q ser tipo cliente
    const order = useStore((state)=> state.order);
    const total = useMemo(()=>order.reduce((accu,product)=>accu + product.subtotal,0),[order]);
    const clearOrderFn = useStore((state)=>state.clearOrder);

    const handleAction = async(formData: FormData)=>{
        const data:OrderRequest = {
            name:formData.get('name') as string,
            total,
            OrderProducts:order
        }
        //validacion desde el front
        const resultValidation  = OrderSchema.safeParse(data) as ResultZoadType;
        if(!resultValidation.success){
            displayErrors(resultValidation.error);
        }else{ 
            //mando a ejecutar el proceso desde el action
            const response = await createOrderAction(data);
         
            if(!response?.success && response?.error)
                displayErrors(response.error);

            if(response?.success){
                clearOrderFn();
                toast.success('Orden Creada!');
            }

        }
    }



    return (
        <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">Pedido</h1>

            {order.length === 0 ? <p className="text-center my-10">El carrito esta vacio</p> :
                <div className="mt-5">
                    {order.map(product => <OrderProductDetail key={product.id} product={product}/>)}

                    <p className="text-2xl mt-20 text-center">
                        Total: {formatCurrency(total)}
                    </p>
                 {/*    ejemplo de crear un server action */}
                    <form className="w-full mt-10 space-y-5" action={handleAction}>
                        <input type="text" placeholder="nombre" 
                        className="bg-white border border-gray-100 p-2 w-full" name='name'/>
                        <button className="py-2 rounded uppercase text-white bg-black w-full text-center
                         cursor-pointer font-bold">
                            Confirmar Pedido    
                        </button>
                    </form>
                </div>
            }
        </aside>
    )
}

export default OrderSummary