"use client"
import Link from "next/link"
import LogoComponent from "../../components/logo"
import { usePathname } from "next/navigation"

const adminNavigation = [
    {url: '/admin/orders', text: 'Ordenes', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/orders/cafe', text: 'Ver Quiosco', blank: true},
]

export default function AdminSidebar() {
    const pathName = usePathname();

    return (
        <aside className="md:w-72 md:h-screen bg-white">
            <LogoComponent />
            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
                <nav className="flex flex-col">
                    { adminNavigation.map((link)=>{
                         const isActive = pathName.startsWith(link.url)
                        return <Link className={`font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b ${ (isActive)  && 'bg-amber-400'} `}
                                href={link.url} key={link.url} target={link.blank ? '_blank' : '_self'}>
                                {link.text} 
                        </Link>
                    })}
                </nav>
            </div>
        </aside>
    )
}