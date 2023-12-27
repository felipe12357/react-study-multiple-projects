import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
const CocktailCard = ({name,image,info,category,id}) => {
  /* const testValue = useOutletContext()
  console.log(testValue); */
  return (
    <div className='cocktail-card'>
      <img src={image} alt={name}/>
      <div className='cocktail-card-details'>
        <h2>{name}</h2>
        <h4>{info}</h4>
        <div>{category}</div>
        <button className='button--primary'><Link to={`/cocktail/${id}`}>Details</Link></button>
      </div>
    </div>
  )
}

export default CocktailCard