"use client"
import { createProductAction } from "@/actions/product-actions";
import { ProductCreation } from "@/src/models";
import { displayErrors } from "@/src/utils";
import { createProductSchema, ResultZoadType } from "@/src/utils/formsValidations";
import { toast } from "react-toastify";

export const CreateProductCompositionComponent =({children}:{children: React.ReactNode})=>{
    const handleForm = async(formData:FormData)=>{

        const data:ProductCreation = {
            name:formData.get('name') as string,
            image:'',
            price:Number(formData.get('price')),
            categoryId:Number(formData.get('categoryId'))
        }
        //validacion desde el front
        const resultValidation  = createProductSchema.safeParse(data) as ResultZoadType;
        if(!resultValidation.success){
            displayErrors(resultValidation.error);
        }else{ 

            const response = await createProductAction(data);
            if(response?.success)
                toast.success('Producto creado');
            else
                displayErrors(resultValidation.error);
        }
    }

    return (<>
        <form className="space-y-5" action={handleForm} >
            {children}
        </form>
    </>)
}

export default CreateProductCompositionComponent;