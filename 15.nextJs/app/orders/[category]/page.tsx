import HeaderComponent from "@/components/header";
import { getProductsXCategory } from "@/src/primaHandler";
import ProductCardComponent from "./productCard";


//estos params se refieren alos parametros de la ruta
//y solo puedo acceder a ellos de esta forma en los archivos layout,page,route y GenerateMetadata
type paramsType ={
    params:{ category:string}
}
const SingleOrderPage = async({params}:paramsType)=>{
    //importante el nombre del parametro corresponde a el nombre de la carpeta []
    const productList = await getProductsXCategory(params.category);
    return (
        <>
           <HeaderComponent> Elige y personaliza tu pedido: </HeaderComponent>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
                {productList.map(product => <ProductCardComponent  key={product.id} product={product}/> )}
            </div>
        </>
    )
}
export default SingleOrderPage