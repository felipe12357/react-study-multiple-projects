import PropTypes from 'prop-types';
import './card.css';
const Card = ({name,age,image}) => {

  return (
    <div className='card'>
        <img className='card__img' src={image}></img>
        <div>
            <h4> {name} </h4>
            <div>{age} years</div>
        </div>
    </div>
  )
}
Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
};



export default Card