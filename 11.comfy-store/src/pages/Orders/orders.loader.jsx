import { validationRoute } from "../../utils/validation-route"
import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 
import { redirect } from 'react-router-dom';

export const orders_loader =async({request},store)=>{
    if (!validationRoute(store)){
         return redirect('/login')
    }

    const URLSearchParams = new URL(request.url).searchParams;
    const paramsObject = Object.fromEntries(URLSearchParams);
    
    const params = (URLSearchParams.size >0) ? paramsObject : "";
    const {user:userState} = store.getState();
    const response = await UseFetchData('orders',params,userState.user.token);
    return response;
}