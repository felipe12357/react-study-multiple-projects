"use client"
import { getCategoriesAction } from "@/actions/product-actions"
import { useEffect, useState } from "react"
import { Category, Product } from "@prisma/client"

type ProductFormComponentProps = {
    buttonLabel:string,
    product?:Product
}
const ProductFormComponent = ({buttonLabel,product}:ProductFormComponentProps)=>{
    //este componente tiene q ser cliente por q el padre es cliente, y el padre es cliente para poder mostrar las notificaciones\
    // antes de redireccionar
    const [categories, setCategories] = useState<Category[]>([]);
  //  const [formProduct,setFormProduct]=useState<Partial<ProductCreation> | undefined>({...product});
    useEffect(()=>{
        getCategories();
    },[]);

    /* useEffect(()=>{
        setFormProduct(product);
    },[product]) */
    
    const getCategories =async()=>{
        const categories = await getCategoriesAction();
        setCategories(categories,);
    }

/*     const handleChange =(input:string,value:string)=>{
        const valueUpdate =(input==='price' || input === 'categoryId') ? parseInt(value) : value;
        setFormProduct({...formProduct,[input]:valueUpdate})
    } */

    //para poder utilizar default value debemos garantizar q todos su valores se encuentren al momento
    //de cargar por primera vez

    //de lo contrario podemos utilizar un formcontralo utilizando el codigo comentado
    if ( (categories.length===0 || !product?.categoryId) && buttonLabel.includes('Actualizar'))
        return(<div>cargando</div>) 

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
                    defaultValue={product?.name}
                   // value ={formProduct?.name || ''}
                  //  onChange={(e)=>handleChange('name',e.target.value)}
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
                    defaultValue={product?.price}
                 //   value ={formProduct?.price || ''}
                 //   onChange={(e)=>handleChange('price',e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Categoría: </label>
                <select
                        className="block w-full p-3 bg-slate-100"
                        id="categoryId"
                        name="categoryId"
                        defaultValue={product?.categoryId} 
                        //  value={formProduct?.categoryId || ''}
                         //  onChange={(e)=>handleChange('categoryId',e.target.value)}
                         >
                                        
                        <option value="">-- Seleccione --</option>
                            {   categories.map(category =>
                                <option key={category.id} value={category.id}>{category.name} </option>
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