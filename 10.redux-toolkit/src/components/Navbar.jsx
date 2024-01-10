
import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const NavBar = () => {
   const { amount } = useSelector((store)=>store.cart);

  return (
    <nav className='nav-cart'>
        <span>Redux Toolkit</span>
        <span>
            <FaCartPlus></FaCartPlus>
            <span className='amount-items'>{amount}</span>
        </span>
       
    </nav>
  )
}

export default NavBar