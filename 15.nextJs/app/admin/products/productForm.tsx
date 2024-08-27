"use client"
import { getCategoriesAction } from "@/actions/product-actions"
import { useEffect, useState } from "react"
import { Category } from "@prisma/client"
type ProductFormComponentProps = {
    buttonLabel:string
}
const ProductFormComponent = ({buttonLabel}:ProductFormComponentProps)=>{
    //este componente tiene q ser cliente por q el padre es cliente, y el padre es cliente para poder mostrar las notificaciones\
    // antes de redireccionar
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=>{
        getCategories();
    },[]);
    
    const getCategories =async()=>{
        const categories = await getCategoriesAction();
        setCategories(categories);
    }

    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Nombre Producto"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    name="price"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Precio Producto"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Categoría:</label>
                <select
                    className="block w-full p-3 bg-slate-100"
                    id="categoryId"
                    name="categoryId"
                >
                    <option value="">-- Seleccione --</option>
                    {   categories.map(category =>
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    }
                </select>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold">
                {buttonLabel}
            </button>
        </>
    )
}
export default ProductFormComponent;