import { validationRoute } from "../../utils/validation-route"
import { redirect } from 'react-router-dom';

export const checkout_loader =async(params,store)=>{
   if (!validationRoute(store)){
        return redirect('/login')
   }

    return null;
}