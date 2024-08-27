import ToastNotification from "@/components/ToastNotification";
import AdminSidebar from "./adminSidebar";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="md:flex">
            <AdminSidebar />
            <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                {children}
            </main>
            <ToastNotification />
        </div>

    )
}