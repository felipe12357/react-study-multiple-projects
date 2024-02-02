import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 

export const home_loader = async(queryClient)=>{

    const queryData = {
        queryClient,
        key:'products-feature'
    }

    const response = await UseFetchData('products?featured=true',queryData);
    return response.data; 
}