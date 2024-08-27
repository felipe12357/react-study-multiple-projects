"use client"
import { redirect } from "next/navigation";
import { useState } from "react";

type ProductSearchFormComponentProps = {
    lastSearch:string |undefined,
}

const ProductSearchFormComponent = ({lastSearch}:ProductSearchFormComponentProps)=>{

    const [searchTerm,setSearchTerm] = useState(lastSearch);
   
    const handleAction =(formData: FormData)=>{
        const searchTerm = formData.get('search') as string;
        if(searchTerm)
            redirect(`/admin/products?search=${searchTerm}`)

        redirect(`/admin/products`);
    }

    return (
        <form action={handleAction} className="flex w-2/4" >
            <input type="text" placeholder="Buscar Producto" name='search'
                value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
                className="p-2 placeholder-gray-400 w-full"></input>

            <button className="bg-indigo-600 p-2 uppercase text-white" onClick={()=>handleAction}>Buscar</button>
        </form>
    )
}
export default ProductSearchFormComponent