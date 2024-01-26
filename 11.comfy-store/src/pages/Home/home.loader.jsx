import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 

export const home_loader =async()=>{
    const response = await UseFetchData('products?featured=true');
    return response.data;
}