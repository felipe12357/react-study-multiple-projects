"use client"
//estos params se refieren alos parametros de la ruta
import HeaderComponent from "@/components/header";
import ProductFormComponent from "../productForm";
import { useEffect, useState } from "react";
import { getProductByIdAction, updateProductAction } from "@/actions/product-actions";
import { toast } from "react-toastify";
import { Product } from "@prisma/client";
import { redirect } from "next/navigation";

//y solo puedo acceder a ellos de esta forma en los archivos layout,page,route y GenerateMetadata
type paramsType ={
    params:{ productId:string}
}
const EditProductPage = ({params}:paramsType)=>{

    const [product,setProduct] = useState<Product>();

    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct = async()=>{
 
        const dataProduct = (await getProductByIdAction(parseInt(params.productId)) )[0];
       // if(!dataProduct)
       //     notFound(); //esta forma de redireccion solo sirve para server components
                //por tal motivo para este approach tocaria redireccionar otra pagina
        setProduct(dataProduct);
    }

    const handleForm = async(formData:FormData)=>{
        const data:Product = {
            name:formData.get('name') as string,
            image:'',
            price:Number(formData.get('price')),
            categoryId:Number(formData.get('categoryId')),
            id:parseInt(params.productId)
        }
        //validacion desde el front
       /*  const resultValidation  = createProductSchema.safeParse(data) as ResultZoadType;
        if(!resultValidation.success){
            displayErrors(resultValidation.error);
        }else{  */

            const response = await updateProductAction(data);
            if(response?.success){
                toast.success('Producto actualizado');
 
                redirect('/admin/products');
            }
          //  else
          //      displayErrors(resultValidation.error);
       // }
    }

    return (<div className="bg-white mt-10 px-5 py-4 rounded-md shadow-md max-w-3xl mx-auto">
        <HeaderComponent >Actualizar Producto</HeaderComponent>
        <form className="space-y-5" action={handleForm} >
            <ProductFormComponent buttonLabel='Actualizar Producto' product={product}></ProductFormComponent>
        </form>
    </div>)

}

export default EditProductPage;