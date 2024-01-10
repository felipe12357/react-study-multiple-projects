import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem,handleItemAmount } from '../redux/cartSlice';

const CartElement = ({amount,title,price,img,id}) => {

  const dispatch = useDispatch();

  const updateCartElementAmount=(id,value)=>{
   
    if(value===0)
      dispatch(removeItem(id))
    else
      dispatch(handleItemAmount({id,value}))
  }

  const removeCartElement=(id)=>{
    dispatch(removeItem(id))
  }

  return (
    <div className='cart-element'>
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

export default CartElement