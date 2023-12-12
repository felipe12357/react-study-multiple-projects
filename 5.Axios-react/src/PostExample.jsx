import React from 'react'
import { useState } from 'react';
import { firstAxiosInstance } from './globalAxiosConfig';
//import axios from 'axios';

//const URL = 'https://course-api.com/axios-tutorial-post';
const URL = '/axios-tutorial-post';

const PostExample = () => {

    const [user,setUser] = useState({name:'',email:''})

    const handleChange=({target})=>{
        setUser({...user,[target.name]:target.value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await firstAxiosInstance.post(URL,user);
            console.log(response);
        }catch(error){
            console.log(error);
        }
     
    }


  return (
    <section>
        <form className='form'>
            <div className='form-row'><label htmlFor="name" className='form-label'>Name</label></div>
            <div className='form-row'><input type="text" className='form-input' placeholder='name' id="name" name="name" onChange={(e)=>handleChange(e)} value={user.name}></input></div>
            <div className='form-row'><label htmlFor="email" className='form-label'>Email</label></div>
            <div className='form-row'><input type="email" className='form-input' placeholder='email' id='email' name ="email" onChange={(e)=>handleChange(e)} value={user.email}></input></div>
            <div className='form-row'><button className='btn' onClick={handleSubmit}>Login</button></div>
        </form>
    </section>
  )
}

export default PostExample