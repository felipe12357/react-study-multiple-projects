import React from 'react';
import {Form,useNavigation} from 'react-router-dom';

const SearchCocktailForm = ({searchTerm}) => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <Form className='search-form'>
            <input type="text" name="search" className='form-input' id="search" defaultValue={searchTerm}></input>
            <button type="submit" className={(isSubmitting) ? 'button-disabled button--primary':'button--primary'} disabled={isSubmitting}>
                Search
           </button> 
    </Form>
  )
}

export default SearchCocktailForm