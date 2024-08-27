import HeaderComponent from "@/components/header";
import ProductTableComponent from "./productTable";
import PaginatorComponent from "@/components/paginator";
import { getProductsWithLimit } from "@/src/primaHandler";
import Link from "next/link";
import ProductSearchFormComponent from "./productSearch";

type ProductPageProps = {
    searchParams:{page:string, search?:string} 
}
const ProductsPage =async({searchParams}:ProductPageProps)=>{

    let skipRegister = 0;

    const currentPage = ( parseInt(searchParams.page)) || 1;
  
    if (searchParams.page){
        let page=currentPage;
        skipRegister= (page -1) *10;
    }

    const [productList,total]  = await getProductsWithLimit(skipRegister,searchParams.search);
    const lastPage = Math.ceil(total /10);

     return (
        <>
            <HeaderComponent> Administrar Productos </HeaderComponent>
            <div className="flex justify-between">
                <ProductSearchFormComponent lastSearch={searchParams.search}></ProductSearchFormComponent>
                <div>
                    <Link href={`/admin/products/create`} className="border-t border-gray-200 p-3 bg-amber-400">Crear Producto</Link>
                    <Link href={`/admin/products/create-composition`} className="border-t border-gray-200 p-3 bg-amber-400 ml-1">Crear Producto Composicion</Link>
                </div>
            </div>
           
            <ProductTableComponent productList={productList}></ProductTableComponent>
            <PaginatorComponent page={"/admin/products"} currentPageNumber={currentPage} lastPage={lastPage} searchParam={searchParams.search}></PaginatorComponent>
        </>
    )
}

export default ProductsPage;

