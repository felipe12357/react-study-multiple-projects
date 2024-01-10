import { useEffect } from 'react';
import CartElement from './CartElement';
import { ACTION_TYPES__CART_ENUM } from './reducer/cartActions';


const CarContainer = ({dispatch,cartState,totalPrice}) => {

    const loadData =async()=>{
        dispatch({type:ACTION_TYPES__CART_ENUM.SET_LOADING,payload:{value:true}});
        const URL = 'https://www.course-api.com/react-useReducer-cart-project';
        const response = await fetch(URL);
        const cellphoneListResponse = await response.json();
        dispatch({type:ACTION_TYPES__CART_ENUM.SET_CART_VALUE,payload:{elements:cellphoneListResponse}});

        setTimeout(()=>{
          dispatch({type:ACTION_TYPES__CART_ENUM.SET_LOADING,payload:{value:false}});
        },3000)
    }

    useEffect(()=>{
      loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
  return (
    <>
      { (cartState.productList.size>0 && !cartState.loading) ?
          <>
            { Array.from(cartState.productList.keys()).map(id => <CartElement {...cartState.productList.get(id)} dispatch={dispatch} key={id}></CartElement>) }
            <hr></hr>
            <div className='total-container'><span>Total</span><span>${totalPrice}</span></div>
          </>
        :
          <div className='center'>Your bag is empty</div>
      }
      <footer>
        { (cartState.productList.size>0 && !cartState.loading) && 
            <button className='button--small' onClick={()=>dispatch({type:ACTION_TYPES__CART_ENUM.CLEAR})}> Clear Cart</button>
        }
      </footer>
    </>
  )
}

export default CarContainer