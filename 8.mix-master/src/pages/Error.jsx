import React from 'react'
import notFoundImge from '../assets/not-found.svg'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  //console.log(error);
  return (
    <div className='main-error-container'>
      {
        (error.status === 404) ?
        <>
          <img src={notFoundImge} />
          <h1>Ohh!</h1>
          <p> We can't seem to find the page you're looking for </p>
          <Link to="/">Back Home</Link>
        </> :
        <div> <h1>Something went wrong</h1></div>
      }
      
    </div>
  )
}

export default Error