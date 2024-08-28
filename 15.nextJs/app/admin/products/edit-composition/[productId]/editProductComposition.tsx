"use client"

import { updateProductAction } from "@/actions/product-actions";
import { displayErrors } from "@/src/utils";
import { Product } from "@prisma/client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";



export const EditProductCompositionComponent =({children,productId}:{children: React.ReactNode,productId:number})=>{

  
    const handleForm = async(formData:FormData)=>{

        const data:Product = {
            name:formData.get('name') as string,
            image:'',
            price:Number(formData.get('price')),
            categoryId:Number(formData.get('categoryId')),
            id:productId
        }

            const response = await updateProductAction(data);
            if(response?.success){
                toast.success('Producto actualizado');
                redirect('/admin/products');
            }
           // else
           //     displayErrors(resultValidation.error);
        
    }

    
    return (<>
        <form className="space-y-5" action={handleForm} >
            {children}
        </form>
    </>)

}

export default EditProductCompositionComponent;