import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { firstAxiosInstance,jokeAxiosInstance } from './globalAxiosConfig';
import { useState } from 'react';

const URL = '/react-store-products';
const URL_JOKE = 'https://icanhazdadjoke.com';

const GetExample = () => {

    const [joke,setJoke] = useState('');
    const getProducts =async()=>{
        try {
            const productList = await firstAxiosInstance.get(URL);
            console.log(productList);
        }catch(error){
            console.log(error);
        }
    }

    //en este ejemplo se añaden cabeceras
    const getDadJoke = async()=>{
        try {
            const response = await jokeAxiosInstance.get('',{
             //   headers:{Accept:'application/json'} //este parametro se configuró en el archivo globalAxios,
            });
            console.log('lo q llega luego dle interceptor',response)
            setJoke(response.joke);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProducts();
        getDadJoke();
    },[])


  return (
    <section className='section text-center'>
        <button className='btn' onClick={getDadJoke}> random joke</button>
        <p className='dad-joke'>{joke}</p>
    </section>
  )
}

export default GetExample