"use server"
import { ProductCreation } from "@/src/models";
import { getCategories, getProductById, insertProduct, updateProduct } from "@/src/primaHandler";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createProductAction = async(data:ProductCreation)=>{

    const result = await insertProduct(data);
    if(result.id)
        return {success:true}
  
    return  {error:{ issues:['there was an error'] }}
}

export const updateProductAction = async(data:Product)=>{
    const result = await updateProduct(data);
    if(result.id){
        //con esta linea limpio la cache de la pagina y carga la nueva informacion
        revalidatePath('/admin/products') 
        return {success:true}
    }
  
    return  {error:{ issues:['there was an error'] }}
}

export const getCategoriesAction = ()=>{
    return  getCategories()
}

export const getProductByIdAction = (id:number)=>{
    return getProductById(id)
}