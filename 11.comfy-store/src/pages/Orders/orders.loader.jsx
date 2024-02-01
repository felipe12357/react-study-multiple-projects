import { validationRoute } from "../../utils/validation-route"
import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 
ç
export const orders_loader =async(params,store)=>{
    if (!validationRoute(store)){
         return redirect('/login')
    }

    const response = await UseFetchData('products?featured=true');
    return response.data;

}