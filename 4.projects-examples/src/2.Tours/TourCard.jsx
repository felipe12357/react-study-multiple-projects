import { useState } from 'react';
import './tourcard.css'
import PropTypes from 'prop-types';
const TourCard = ({image,price,name,info,deleteTourFunction,id}) => {
  const [readMore,setReadMore] = useState(false);

  const shortInfo = info.substr(0,330);

  return (
    <article className='tour-card'>
      <img src={image}></img>
      <span className='tour-price'>${price}</span>
      <div className='tour-content'>
        <h4>{name}</h4>
        { !readMore ? <p>{shortInfo}...  <span className="read-tag" onClick={()=>setReadMore(true)}>Read more</span></p> :
          <p>{ info }  <span className="read-tag" onClick={()=>setReadMore(false)}>show less</span></p> }
        <button className='btn-green' onClick={()=>deleteTourFunction(id)}>Not interested</button>
      </div>
    </article>
  )
}
TourCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  info: PropTypes.string,
  id:PropTypes.string,
  deleteTourFunction:PropTypes.func
};


export default TourCard