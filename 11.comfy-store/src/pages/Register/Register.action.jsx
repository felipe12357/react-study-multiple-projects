import { UsePostData } from '../../hooks/UseHandlerAPIHook'; 
import {toast} from 'react-toastify';
import { redirect } from 'react-router-dom';
//actions para post , loaders para GET
export const register_action = async({request})=>{
    const formData =  await request.formData();
    //para q funcione todos los inputs tienen q tener asignada la propiedad name
    const data = Object.fromEntries(formData);
    //console.log(data);
    try {
      const result = await UsePostData('auth/local/register',data); 
      toast.success('User registered Succefully')
      return redirect('/'); //esta funcion redirect esta amarralla a actiones y loaders.
    }catch(err) {
        console.log(err?.response?.data?.error);
        toast.error('please check you data:' + err.response.data.error.message);
      //el truco para prevenir la redireccion es retornar algo
      return err;
    }
    return null
}