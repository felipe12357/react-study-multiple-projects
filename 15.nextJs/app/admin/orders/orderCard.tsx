
import { updateOrderStateAction } from "@/actions/order-actions";
import { formatCurrency } from "@/src/utils";
import { Order, Product } from "@prisma/client";


type OrderCardProps = {
    order: Order & {
        OrderProducts:{
            quantity:number,
            product:Pick<Product, 'name' | 'price' | 'image' | 'id'>
        }[]
    }
}

const OrderCardComponent = ({order}:OrderCardProps) =>{
   /*  const handleAction=async()=>{

        const response = await updateOrderStateAction(order.id);

        if(!response?.success && response?.error)
            toast.error(response.error);

        if(response?.success){
            toast.success('Orden actualizada');
        }
    } */
 
    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
        >
            <p className='text-2xl font-medium text-gray-900'>Cliente: {order.name} </p>
            <p className='text-lg font-medium text-gray-900'>Productos Ordenados:</p>
            <dl className="mt-6 space-y-4">
                {order.OrderProducts.map(({product,quantity}) =>
                    <div key={product.id} className="flex items-center gap-2 border-t border-gray-200 pt-4">
                        <dt className="text-sm  text-gray-400">( {quantity} )</dt>
                        <dd className="text-sm font-medium text-gray-900">{ product.name}</dd>
                    </div>
                )}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total a Pagar:</dt>
                    <dd className="text-base font-medium text-gray-900">{formatCurrency(order.total)}</dd>
                </div>
            </dl>
            
            <form action={updateOrderStateAction}>
                <input type='hidden' value={order.id} id='id' name='id'></input>
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">
                    Marcar Orden Completada
                </button>
            </form>
        </section>
    )
}
export default OrderCardComponent;