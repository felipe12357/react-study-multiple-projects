
import { people } from "../data"
import { Fragment } from 'react';
import VanillaIncompleteApiResponseChild from './VanillaIncompleteApiResponseChild';
const VanillaIncompleteApiResponse = () => {
  return (
    <Fragment>
        <div>VanillaIncompleteApiResponse</div>
        { people.map((person)=>
            <VanillaIncompleteApiResponseChild key={person.id} {...person}/>
        )}
    </Fragment>
  )
}

export default VanillaIncompleteApiResponse