import {toast} from 'react-toastify';

export const validationRoute = (store)=>{
   const user = store.getState().user;
   if(!user.user){
        toast.warn('You most been logged to access to this page');
   }

   return (user.user);
}