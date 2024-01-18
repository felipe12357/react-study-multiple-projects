import React from 'react'
import { FormInput,SubmitBtn } from '../../common'
import { Link } from 'react-router-dom'

const Login = () => {
  
  return (
    <section className='h-screen grid place-items-center'>
      <form method='post' className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type="email" label="Email" name="identifier" defaultValue='test@test.com'></FormInput>
        <FormInput type="password" label="Password" name="password" defaultValue='secret'></FormInput>
        <div className='mt-4'>
            <SubmitBtn label="Login"></SubmitBtn>
            <button type="button" className='btn btn-secondary btn-block mt-4'>Guest User</button>
            <p className='mt-4 text-center'>
              Not a member yet? 
              <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>Register</Link>
            </p>
        </div>
      </form>
      
    </section>

  )
}

export default Login