import React from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../common/SectionTitle';
import { formatPrice } from '../../utils/format-price';
import { useDispatch } from 'react-redux';
import { removeItem,editItemAmount } from '../../redux/cartSlice';

const Cart = () => {
  const { cartItems, totalWithOutTaxes,shipping,tax,total } = useSelector((store)=>store.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (cartID)=>{
    dispatch(removeItem(cartID))
  }

  const handleAmountItem = (cartID,amount)=>{
    dispatch(editItemAmount({cartID,amount}))
  }

  return (
    <div className='pt-6'>
        <SectionTitle title="Shooping Cart"></SectionTitle>
        <div className='flex tracking-wider flex-wrap'>
          <div className='w-full sm:w-3/4 mt-12'>
              { cartItems.map(item =>
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
                </div>)
              }
          </div>
          <div className='w-full sm:w-1/4 p-8 mt-12 self-start flex-grow  rounded-lg bg-base-200 grid grid-cols-2'>
              <span>Subtotal</span> <span>{formatPrice(totalWithOutTaxes)} </span>
              <span className='pt-4'>Shipping</span> <span className='pt-4'>{formatPrice(shipping)} </span>
              <span className='pt-4'>Taxes</span> <span className='pt-4'>{formatPrice(tax)} </span>
              <span className='pt-8 font-bold'>Order Total </span> <span className='pt-8'>{formatPrice(total)} </span>
              <div className='col-span-2 pt-8'>
                <button className='btn btn-primary btn-sm btn-block' >Login to Checkout</button>
              </div>
             
          </div>
        </div>
    </div>
  )
}

export default Cart