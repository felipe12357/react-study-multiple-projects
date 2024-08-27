//creo esta pagina para mostrar otra alternativa para utilizar componentes server dentro de componentes client

import HeaderComponent from "@/components/header";
import CreateProductCompositionComponent from "./createProductComposition";
import ProductFormCompositionComponent from "./productFormComposition";

//utilizando el patron composicion
const CreateCompositionPage =()=>{
    return (
        <div className="bg-white mt-10 px-5 py-4 rounded-md shadow-md max-w-3xl mx-auto">
            <HeaderComponent >Nuevo Producto Composition</HeaderComponent>
            <CreateProductCompositionComponent>
                {/* al hacer esto next guarda un espacio en memoria lo q permite q ProductFormCompositionComponent sea de tipo server */}
                <ProductFormCompositionComponent buttonLabel='Crear Producto'></ProductFormCompositionComponent>
            </CreateProductCompositionComponent>
        </div>
    )
}
export default CreateCompositionPage;