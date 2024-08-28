//creo esta pagina para mostrar otra alternativa para utilizar componentes server dentro de componentes client

import HeaderComponent from "@/components/header";
import EditProductCompositionComponent from "./editProductComposition";
import ProductFormCompositionComponent from "../../productFormComposition";
import { getProductByIdAction } from "@/actions/product-actions";
import { notFound } from "next/navigation";
type paramsType ={
    params:{ productId:string}
}

//utilizando el patron composicion
const EditCompositionPage =async({params}:paramsType)=>{

    const dataProduct = (await getProductByIdAction(parseInt(params.productId)) )[0];
    if(!dataProduct)
        notFound(); //esta forma de redireccion solo sirve para server components

    return (
        <div className="bg-white mt-10 px-5 py-4 rounded-md shadow-md max-w-3xl mx-auto">
            <HeaderComponent >Editar Producto Composition: {dataProduct.name}</HeaderComponent>
            <EditProductCompositionComponent productId={dataProduct.id}>
                {/* al hacer esto next guarda un espacio en memoria lo q permite q ProductFormCompositionComponent sea de tipo server */}
                <ProductFormCompositionComponent buttonLabel='Actualizar Producto' product={dataProduct}></ProductFormCompositionComponent>
            </EditProductCompositionComponent>
        </div>
    )
}
export default EditCompositionPage;