'use client'

import LogoComponent from "@/components/logo";
import { products } from "@/prisma/data/products";
import { OrderComplete } from "@/src/models";
import useSWR from "swr";

const OrdersReady = ()=>{
    const URL = '/orders-ready/api'
    const fetcher = ()=>fetch(URL).then(res =>res.json()).then(data =>data);

    const {data:orders,error,isLoading } = useSWR<OrderComplete[]>(URL,fetcher,{
      //  refreshInterval:1000,
        revalidateOnFocus:true
    });
    return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black">Ordenes Listas</h1>
            <LogoComponent />
            {   (orders?.length) ?
                orders?.map( order =><div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10" key={order.id}>
                   <div className="bg-white shadow p-5 space-y-5  rounded-lg">
                        <p className="text-lg font-bold text-slate-600">Cliente: {order.name}</p>
                        {order.OrderProducts.map(product =>
                        <div className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500" key={product.product.id}>
                            <p>
                                <span className="font-bold">( {product.quantity} ) </span>
                                { product.product.name}
                            </p>
                        </div>)}
                   </div>

                </div>) 
                : <p className="text-center my-10">No hay ordenes listas</p>
            }
        </>
    )
}
export default OrdersReady;