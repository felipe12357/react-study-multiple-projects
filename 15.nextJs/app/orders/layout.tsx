import OrderSideBarComponent from "@/app/orders/orderSidebar";

import ToastNotification from "@/components/ToastNotification";
import OrderSummary from "./orderSummary";

const OrdersLayout = ({ children}: Readonly<{ children: React.ReactNode; }>)=>{
    return (
        <div className="md:flex">
            <OrderSideBarComponent/>
            <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5"> {children}</main>
            <OrderSummary/>
            <ToastNotification/>
        </div>
    )
}
export default OrdersLayout;