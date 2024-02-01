import { UsePostData } from '../../hooks/UseHandlerAPIHook';
import {toast} from 'react-toastify';
import { redirect } from 'react-router-dom';
import {login} from '../../redux/userSlice'

export const login_action = async({request},{dispatch})=>{

    const formData =  await request.formData();
    //para q funcione todos los inputs tienen q tener asignada la propiedad name
    const data = Object.fromEntries(formData);
    try {
      const {user,jwt} = await UsePostData('auth/local',data); 
      dispatch(login({username:user.username,token:jwt }))
      toast.success('Loggin Succefull')
      return redirect('/'); //esta funcion redirect esta amarralla a actiones y loaders.
    }catch(err) {
        console.log(err?.response?.data?.error);
        toast.error('please check you data:' + err.response.data.error.message);
      //el truco para prevenir la redireccion es retornar algo
      return err;
    }
}