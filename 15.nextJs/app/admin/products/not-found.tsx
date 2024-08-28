import HeaderComponent from "@/components/header";
import Link from "next/link";

const NotFound = ()=>{
    return(<div className="text-center">
        <HeaderComponent> Producto no encontrado</HeaderComponent>
        <Link className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold " href='/admin/products'>Ir a Productos</Link>
    </div>)
}

export default NotFound;