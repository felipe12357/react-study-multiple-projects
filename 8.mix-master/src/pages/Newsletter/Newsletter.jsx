import React from 'react';
import './newsletter.css';
import { Form, redirect,useNavigation } from 'react-router-dom';
import { UsePostNewsLetterCustomHook } from '../../hoooks/UseHandlerAPIHook';
import {toast} from 'react-toastify';

//actions para post , loaders para GET
export const news_letter_form_action = async({request})=>{
  const formData =  await request.formData();
  //para q funcione todos los inputs tienen q tener asignada la propiedad name
  const data = Object.fromEntries(formData);
  try {
    const result = await UsePostNewsLetterCustomHook(data); 
    toast.success(result.data.msg)
    return redirect('/'); //esta funcion redirect esta amarralla a actiones y loaders.
  }catch(error) {
    toast.error(error?.message);
    //el truco para prevenir la redireccion es retornar algo
    return error;
  }

}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className='newsletter'>
      <h2>Our Newsletter AS {isSubmitting} FIN</h2>
      <Form method='POST'>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>Name</label>
        </div>
        <div className='form-row'>
          <input type="text" name="name" id="name" className='form-input'></input>
          </div>
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>Last Name</label>
        </div>
        <div className='form-row'>
          <input type="text" name="lastName" id="lastName" className='form-input' ></input>
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>Email</label>
        </div>
        <div className='form-row'>
          <input type="email" name="email" className='form-input' id="email" defaultValue='test@test.com'></input>
        </div>
        <div className='form-row'>
          <button className={(isSubmitting) ? 'button-disabled button--primary  btn-block':'button--primary  btn-block'} disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default Newsletter