import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error:{message:string} = useRouteError() as {message:string};
  return (
    <div>
        <h4>There was an error...</h4>
         {error.message}
    </div>
  )
}

export default SinglePageError