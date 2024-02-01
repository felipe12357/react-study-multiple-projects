import React from 'react'
import { FormInput,SubmitBtn } from '../../common';
import { Form, Link } from 'react-router-dom'; 

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
       <Form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type="text" label="Username" name="username" defaultValue="andres"></FormInput>
        <FormInput type="email" label="E-mail" name="email" defaultValue="abc@a.com"></FormInput>
        <FormInput type="password" label="Password" name="password" defaultValue="123456"></FormInput>
        <div className='mt-4'>
            <SubmitBtn label="Register"></SubmitBtn>
            <p className='mt-4 text-center'>
               Already a member?
              <Link to='/login' className='ml-2 link link-hover link-primary'>Login</Link>
            </p>
        </div>
      </Form>
    </section>
  )
}

export default Register