import React from 'react'
import { useAppGlobalContext } from '../GlobalContext';

const SearchForm = () => {

  const {setCurrentSearch} = useAppGlobalContext();

  const handleSubmit=(e)=>{
    e.preventDefault()
    const searchValue = e.target.elements['form_input'].value;
    if(searchValue)
      setCurrentSearch(searchValue);
   
  }

  return (
    <section className='search-section'>
      <h1 className='title'> Unsplash Images</h1>
      <form  className="form_search" onSubmit={handleSubmit}>
        <input type="text" name="form_input" placeholder='cat' className="search-input" ></input>
        <button  className="btn btn-search" type="submit">Search</button>
      </form>
    </section>
  )
}

export default SearchForm