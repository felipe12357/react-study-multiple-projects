import React from 'react'
import { FormInput,SubmitBtn } from '../../common'
import { Link,Form, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {login} from '../../redux/userSlice';
import {toast} from 'react-toastify';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logAsGuest = ()=>{
    dispatch(login({username:'guest'}));
    toast.success('Welcome Guest user')
    navigate('/')
  }

  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type="email" label="Email" name="identifier" defaultValue='abc@a.com'></FormInput>
        <FormInput type="password" label="Password" name="password" defaultValue='123456'></FormInput>
        <div className='mt-4'>
            <SubmitBtn label="Login"></SubmitBtn>
            <button type="button" className='btn btn-secondary btn-block mt-4' onClick={logAsGuest}>Guest User</button>
            <p className='mt-4 text-center'>
              Not a member yet? 
              <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>Register</Link>
            </p>
        </div>
      </Form>
    </section>
  )
}

export default Login