import React from 'react'
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h4 className='font-bold text-4xl'>There was an error...</h4>
        {error.message}
    </div>
  )
}

export default SinglePageError