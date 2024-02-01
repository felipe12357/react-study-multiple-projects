import React from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../common/SectionTitle';
import { Link } from 'react-router-dom';
import CartItemList from './CartItemList';
import { formatPrice } from '../../utils/format-price';

const Cart = () => {
  const { totalWithOutTaxes,shipping,tax,total,numItemsInCart } = useSelector((store)=>store.cart);
  const { user } = useSelector((store)=>store.user);

  return (
    <div className='pt-6'>
        { (numItemsInCart === 0) ?  <SectionTitle title="your cart is empty"></SectionTitle> :
          <>
             <SectionTitle title="Shooping Cart"></SectionTitle>
            <div className='flex tracking-wider flex-wrap'>
              <div className='w-full sm:w-3/4 mt-12'>
                <CartItemList></CartItemList>
              </div>
              <div className='w-full sm:w-1/4 p-8 mt-12 self-start flex-grow  rounded-lg bg-base-200 grid grid-cols-2'>
                  <span>Subtotal</span> <span>{formatPrice(totalWithOutTaxes)} </span>
                  <span className='pt-4'>Shipping</span> <span className='pt-4'>{formatPrice(shipping)} </span>
                  <span className='pt-4'>Taxes</span> <span className='pt-4'>{formatPrice(tax)} </span>
                  <span className='pt-8 font-bold'>Order Total </span> <span className='pt-8'>{formatPrice(total)} </span>
                  <div className='col-span-2 pt-8'>
                    {(user) ? <Link to="/checkout" className='btn btn-primary btn-sm btn-block' >Procced to Checkout</Link>
                            : <Link to="/login" className='btn btn-primary btn-sm btn-block' >Login to Checkout</Link>}
                  </div>
              </div>
            </div>
          </>
        }
    </div>
  )
}

export default Cart