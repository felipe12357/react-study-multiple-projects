import React from 'react'
import { useState } from 'react';
import {toast} from 'react-toastify';
import {UseCreateReactQueryCustomHook} from './ReactQueryCustomHooks';

const GroceryForm = () => {
   
    const [inputGroceryValue,setInputGroceryValue] = useState('');
    const createTaskFn = UseCreateReactQueryCustomHook('tasks');

    const handleNewItem = (e)=>{
        e.preventDefault();
        if(!inputGroceryValue)
            toast.error('Can not enter null value');
        else{
            createTaskFn({title:inputGroceryValue});
            setInputGroceryValue('');
        }
    }

  return (
    <form className='form grocery'>
    <h3>Grocery Bud</h3>
    <section className='input-container'>
        <input type='text' className='form-input' name="name" onChange={(e)=>setInputGroceryValue(e.target.value)} value={inputGroceryValue} autoComplete="of"></input>
        <button type="button" className='button button--primary' onClick={(e)=>handleNewItem(e)}>Add Item</button>
    </section>
    </form>
  )
}

export default GroceryForm