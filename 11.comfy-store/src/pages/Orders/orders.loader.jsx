import { validationRoute } from "../../utils/validation-route"
import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 
import { redirect } from 'react-router-dom';

export const orders_loader =async({request},store,queryClient)=>{
    if (!validationRoute(store)){
         return redirect('/login')
    }

    const queryData = {
        queryClient,
        key:"orderList"
      }

    const URLSearchParams = new URL(request.url).searchParams;
    const paramsObject = Object.fromEntries(URLSearchParams);
    
    const params = (URLSearchParams.size >0) ? paramsObject : "";
    const {user:userState} = store.getState();
    const response = await UseFetchData('orders',queryData,params,userState.user.token);
    return response;
}