import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 

//por aca puedo obtener los parametros de la url
export const product_loader =async({params})=>{
    const response = await UseFetchData(`products/${params.id}`);
    return response.data;
  }