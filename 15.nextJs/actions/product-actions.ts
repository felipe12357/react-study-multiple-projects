"use server"
import { ProductCreation } from "@/src/models";
import { getCategories, insertProduct } from "@/src/primaHandler";

export const  createProductAction = async(data:ProductCreation)=>{

    const result = await insertProduct(data);
    if(result.id)
        return {success:true}
  
    return  {error:{ issues:['there was an error'] }}
}

export const getCategoriesAction = ()=>{
    return  getCategories()
}