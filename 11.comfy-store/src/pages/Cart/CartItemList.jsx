import React from 'react'
import { formatPrice } from '../../utils/format-price';
import { useDispatch } from 'react-redux';
import { removeItem,editItemAmount } from '../../redux/cartSlice';
import { useSelector } from 'react-redux';

function CartItemList() {

    const { cartItems } = useSelector((store)=>store.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (cartID)=>{
        dispatch(removeItem(cartID))
    }
    
    const handleAmountItem = (cartID,amount)=>{
        dispatch(editItemAmount({cartID,amount}))
    }

    return (
        <> { cartItems.map(item =>
            <div className='grid grid-cols-4 pb-4' key={item.cartID}>
            <img className='rounded-lg w-36 h-36 object-cover' src={item.image}></img>
            <div className='mt-4'> 
                <h2 className='capitalize text-xl'>{item.title}</h2>
                <h4>{item.company}</h4>
                <div className='mt-4 flex items-center'>
                Color: <span className='btn btn-circle btn-xs ml-2'  style={{"backgroundColor":item.selectedColor,}} ></span>
                </div>
            </div>
            <div className='mt-4 text-center'>
                <label>Amount</label>
                <div className='mt-2 '>
                <select className="select select-primary select-sm" value={item.amount}  
                        onChange={e=>{ handleAmountItem(item.cartID,parseInt(e.target.value)) }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>
                <div className='mt-2'>
                <button className='btn-secondary btn btn-xs' onClick={()=>handleRemoveItem(item.cartID)}>remove</button>
                </div>
            </div>
            <div className='text-xl flex items-center '>
                { formatPrice(item.price * item.amount)}
            </div>
            </div>
        )}</>
    )
}

export default CartItemList