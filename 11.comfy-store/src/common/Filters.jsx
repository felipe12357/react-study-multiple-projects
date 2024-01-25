import React from 'react'
import FormInput from './FormInput'
import { Link,Form } from 'react-router-dom';
import {FormCheck,FormSelect,FormRange } from './index';

const Filters = ({searchWord,filterOptions}) => {

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>

        <FormInput type='search' name='search' label={searchWord} inputSize="input-sm" ></FormInput>
        {   filterOptions.map((option,index)=>
                <FormSelect optionList={option.options} label={option.label} inputSize="select-sm" key={index}/>
            )
        }
        <FormRange label="Select Price" defaultValue="100000" min="0" max="100000" inputSize="range-sm" step="1000"></FormRange>
        <FormCheck label="Free Shipping" name="shipping" inputSize="checkbox-sm"/>

        <button type="submit" className='btn btn-primary btn-sm'>Search</button>
        <Link to={`/${searchWord}`} className='btn btn-accent btn-sm'> Reset</Link>
    </Form>
  )
}

export default Filters