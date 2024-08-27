
//estos params se refieren alos parametros de la ruta
//y solo puedo acceder a ellos de esta forma en los archivos layout,page,route y GenerateMetadata
type paramsType ={
    params:{ productId:string}
}
const EditProductPage = ({params}:paramsType)=>{

    return (<>
        hola mundo {params.productId}
    </>)
}

export default EditProductPage;