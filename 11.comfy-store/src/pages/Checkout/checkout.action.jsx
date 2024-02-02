import { formatPrice } from '../../utils/format-price';
import { UsePostData } from '../../hooks/UseHandlerAPIHook'; 
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
export const checkout_action = async({request},store,queryClient)=>{
    const formData =  await request.formData();
    //para q funcione todos los inputs tienen q tener asignada la propiedad name
    const data = Object.fromEntries(formData);
    const {cart:cartState,user:userState} = store.getState();
    const {total,numItemsInCart,cartItems} = cartState;
    const {token} = userState.user;

    const dataTosend = {
        data:{
            ...data,
            chargeTotal:total,
            numItemsInCart: numItemsInCart,
            orderTotal:formatPrice(total),
            cartItems:cartItems
        }
    }
    
    try {
      const result = await UsePostData('orders',dataTosend,token); 
      store.dispatch(clearCart())
      queryClient.removeQueries(['orders'])
      toast.success('Order registered Succefully');
      return redirect('/orders'); //esta funcion redirect esta amarralla a actiones y loaders.
    }catch(err) {
        console.log(err);
       // console.log(err?.response?.data?.error);
        toast.error('please check you data:' + err.response.data.error.message);
      //el truco para prevenir la redireccion es retornar algo
      return err;
    }
}