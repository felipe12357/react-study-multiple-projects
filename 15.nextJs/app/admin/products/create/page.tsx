"use client"
import { createProductAction } from "@/actions/product-actions";
import ProductFormComponent from "../productForm";
import { toast } from "react-toastify";
import { ProductCreation } from "@/src/models";
import { createProductSchema, ResultZoadType } from "@/src/utils/formsValidations";
import { displayErrors } from "@/src/utils";
import HeaderComponent from "@/components/header";

const CreateProductPage = ()=>{

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
 
    return (<div className="bg-white mt-10 px-5 py-4 rounded-md shadow-md max-w-3xl mx-auto">
        <HeaderComponent >Nuevo Producto</HeaderComponent>
        <form className="space-y-5" action={handleForm} >
            <ProductFormComponent buttonLabel='Crear Producto'></ProductFormComponent>
        </form>
    </div>)
}

export default CreateProductPage;