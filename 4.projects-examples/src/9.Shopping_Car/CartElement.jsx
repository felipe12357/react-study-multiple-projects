import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useContextAPIGlobal } from './globalContext/GlobalContextProvider';
import { ACTION_TYPES__CART_ENUM } from './reducer/cartActions';

const CartElement = ({amount,title,price,img,id}) => {

  const {dispatch} = useContextAPIGlobal();

  const updateCartElementAmount=(id,value)=>{
    dispatch({type:ACTION_TYPES__CART_ENUM.UPDATE_AMOUNT,payload:{id,value}})
  }

  const removeCartElement=(id)=>{
    dispatch({type:ACTION_TYPES__CART_ENUM.REMOVE_ELEMENT,payload:{id}})
  }

  return (
    <div className='cart-container'>
        <img src={img} className='cart-image'></img>
        <span className='cart-description'>
            <h4 className='title'>{title}</h4>
            ${price}
            <div className="remove-btn" onClick={()=>removeCartElement(id)}>remove</div>
        </span>
        <span className='amount-handler'>
            <FaChevronUp className="quantityIcon" onClick={()=>updateCartElementAmount(id,amount+1) }></FaChevronUp>
            <div>{amount}</div>
            <FaChevronDown className="quantityIcon" onClick={()=>updateCartElementAmount(id,(amount-1 > 0)? amount-1:0) }></FaChevronDown>
        </span>
    </div>
  )
}

CartElement.propTypes = {
    amount:PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    img: PropTypes.string,
    id:PropTypes.string,
};
export default CartElement