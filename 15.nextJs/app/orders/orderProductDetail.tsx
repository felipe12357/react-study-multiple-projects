import { OrderItem } from "@/src/models"
import { useStore } from "@/src/store";
import { formatCurrency } from "@/src/utils"
import { XCircleIcon, MinusIcon,PlusIcon } from "@heroicons/react/24/solid"
import { useMemo } from "react";
export type OrderProductDetailProps ={
    product:OrderItem
}
const OrderProductDetail = ({product}:OrderProductDetailProps)=>{
    const increaseQuantity = useStore((state)=> state.increaseQuantity);
    const decreaseQuantity = useStore((state)=> state.decreaseQuantity);
    const deleteProduct = useStore((state)=> state.deleteProduct);
    const MAX_ITEMS =5;

    const disableIncreaseButton = useMemo(()=> product.quantity === MAX_ITEMS,[product.quantity])

   
    
    return (
        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{product.name} </p>

                    <button type="button" onClick={() => {deleteProduct(product.id)}} >
                        <XCircleIcon className="text-red-600 h-8 w-8"/>
                    </button>
                </div>
                <p className="text-2xl text-amber-500 font-black"> {formatCurrency(product.price)} </p>
                <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                    <button type="button" onClick={() => {decreaseQuantity(product.id)}} >
                        <MinusIcon className="h-6 w-6"/>
                    </button>

                    <p className="text-lg font-black "> {product.quantity} </p>

                    <button className='disabled:opacity-20' 
                        type="button" disabled={disableIncreaseButton} onClick={() => {increaseQuantity(product.id)}} >
                        <PlusIcon className="h-6 w-6"/>
                    </button>
                </div>
                <p className="text-xl font-black text-gray-700">
                    Subtotal: {formatCurrency(product.subtotal)}
                    <span className="font-normal"> 

                    </span>
                </p>
            </div>
        </div>
    )
}
export default OrderProductDetail