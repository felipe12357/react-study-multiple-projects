"use client"

import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


export type CategoryProps = {
    category: Category
}

const CategoryIconComponent = ({category}:CategoryProps) =>{

    const params = useParams(); //para usarse eeste componente debe ser del lado del cliente
    //importante el nombre del parametro corresponde a el nombre de la carpeta [] en este caso category

    return (
        <div className={`${category.slug === params.category && 'bg-amber-400' }
            flex items-center gap-4 w-full border-t border-gray-200 p-3
            last-of-type:border-b `}>
           {/* si se hace asi.. queda con pixeles fijos
            <Image src={`/icon_${category.slug}.svg`} alt={`icon ${category.name}`} width={70} height={70}></Image> */}
            <div className="w-16 h-16 relative">
                <Image src={`/icon_${category.slug}.svg`} alt={`icon ${category.name}`} fill></Image>
            </div>
            <Link className="text-xl font-bold" href={`/orders/${category.slug}`}>{category.name}</Link>
        </div>
    )
}
export default CategoryIconComponent;