import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 

//por aca puedo obtener los parametros de la url
export const product_loader =async({params},queryClient)=>{

  const queryData = {
    queryClient,
    key:`singleProduct${params.id}`
  }

    const response = await UseFetchData(`products/${params.id}`,queryData);
    return response.data;
}