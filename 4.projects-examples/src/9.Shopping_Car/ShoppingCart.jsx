

import  NavBar  from './NavBar';
import CartContainer from './CartContainer';
import './ShoppingCart.css';
import LoadingModal from './LoadingModal';
import { useContextAPIGlobal } from './globalContext/GlobalContextProvider';
const ShoppingCart = () => {
  const {cartState} = useContextAPIGlobal();
  return (
    <main>
       { (cartState.loading) && <LoadingModal></LoadingModal> }
        <NavBar></NavBar>
        <CartContainer></CartContainer>
    </main>
  )
}

export default ShoppingCart