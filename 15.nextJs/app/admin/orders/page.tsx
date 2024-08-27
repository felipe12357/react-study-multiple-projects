import HeaderComponent from "@/components/header"
import { getPendingOrders } from "@/src/primaHandler"
import OrderCardComponent from "./orderCard";


const AdminOrderPage = async()=>{
    const orders = await getPendingOrders();

    return (
        <>
            <HeaderComponent> Administrar Ordenes </HeaderComponent>
            { orders.length ? 
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
                    {orders.map(order =><OrderCardComponent key={order.id} order={order}></OrderCardComponent>)}  
                </div>
                : <p className="text-center">No hay ordenes pendientes</p>
            }
        </>
    )
}

export default AdminOrderPage