import { nanoid } from 'nanoid';
import GroceriesList from './GroceriesList'
import './grocery.css';
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'

const GroceryBud = () => {

    const [groceryList,setGroceryList] = useState([]);
    const [inputGroceryValue,setInputGroceryValue] = useState('');

    useEffect(()=>{
        const lastValue= JSON.parse(localStorage.getItem('groceryList'));
        lastValue && setGroceryList([...lastValue]);
    },[])


    const handleNewItem = ()=>{
        if(!inputGroceryValue)
            toast.error('Can not enter null value');
        else{
            const newValues = [...groceryList,{value:inputGroceryValue,id:nanoid(),completed:false}]
            setGroceryList(newValues);
            localStorage.setItem('groceryList',JSON.stringify(newValues))
            setInputGroceryValue('');
            toast.success('item created');
        }
    }

    const removeItem = (id)=>{
        const grocery = groceryList.filter(grocery => grocery.id !== id)
        setGroceryList(grocery);
        localStorage.setItem('groceryList',JSON.stringify(grocery));
        toast.success('item removed');
    }

    const updateItem = (id,value)=>{
       
        const updatedGroceryList = groceryList.map(grocery =>{
            if(grocery.id === id) 
                grocery.completed = value
               // grocery = {...grocery,completed:value};
            return grocery
        });
        setGroceryList(updatedGroceryList);
        localStorage.setItem('groceryList',JSON.stringify(updatedGroceryList));
        toast.success('item updated');
    }

  return (
    <div className='overwritte-class centered'>
         <ToastContainer position='top-center'></ToastContainer>
        <form className='form grocery'>
            <h3>Grocery Bud</h3>
            <section className='input-container'>
                <input type='text' className='form-input' onChange={(e)=>setInputGroceryValue(e.target.value)} value={inputGroceryValue}></input>
                <button type="button" className='button button--primary' onClick={handleNewItem}>Add Item</button>
            </section>
            {groceryList.length>0 && <GroceriesList groceriesList={groceryList} removeItem={removeItem} updateItem={updateItem}></GroceriesList>}
        </form>
    </div>
  )
}

export default GroceryBud