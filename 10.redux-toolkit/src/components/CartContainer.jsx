
import CartElement from './CartElement';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setModal } from '../redux/modalSlice';
import { getCartItems,setTotals } from '../redux/cartSlice';

const CarContainer = () => {
    
  const { cartItems,total,isLoading } = useSelector((store)=>store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setTotals())
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems(123))
  },[]) 

 
  return (
    <>
      <section className='cart-container'>
        { (cartItems.length>0 && !isLoading) ?
            <>
              { cartItems.map(item => <CartElement {...item} key={item.id}></CartElement>) }
              <hr></hr>
              <div className='total-container'><span>Total</span><span>${total}</span></div>
            </>
          :
          (!isLoading) &&
            <div className='center'>Your bag is empty</div>
        }
        <footer>
        { (cartItems.length>0 && !isLoading) && 
              <button className='button--small' onClick={()=>dispatch(setModal(true))}> Clear Cart</button>
          }
        </footer>
      </section>
    </>
  )
}

export default CarContainer