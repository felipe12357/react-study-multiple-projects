"use client";
import HeaderComponent from "@/components/header"

import useSWR, { mutate } from "swr";
import { OrderComplete } from "@/src/models";
import OrderCardSWRComponent from "./orderCardSWR";



const AdminOrderPageSWR =()=>{
    const URL = '/admin/orders-swr/api'
    const fetcher = ()=>fetch(URL).then(res =>res.json()).then(data =>data);

    let {data:orders,error,isLoading } = useSWR<OrderComplete[]>(URL,fetcher,{
      //  refreshInterval:1000,
        revalidateOnFocus:true
    });

    const updateOrderState =async(id:number)=>{
        const result = await fetch(URL,{ method: 'POST', headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({id}),
        })
        if(result)
            mutate(URL); //importante mutate funciona con la URL API mas no con la url de la vista
    }

    return (
        <>
            <HeaderComponent> Administrar Ordenes ejemplo con SWR </HeaderComponent>
            { orders?.length ? 
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
                   {orders.map(order =><OrderCardSWRComponent key={order.id} order={order} updateOrderState={updateOrderState}></OrderCardSWRComponent>)}
                </div>
                : <p className="text-center">No hay ordenes pendientes</p>
            }
        </>
    )
}

export default AdminOrderPageSWR