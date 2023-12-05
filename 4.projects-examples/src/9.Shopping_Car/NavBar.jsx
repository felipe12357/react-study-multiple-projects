
import { FaCartPlus } from 'react-icons/fa';
import { useContextAPIGlobal } from './globalContext/GlobalContextProvider';

const NavBar = () => {
  const {totalAmount} = useContextAPIGlobal();

  return (
    <nav className='nav-cart'>
        <span>Use Reducer</span>
        <span>
            <FaCartPlus></FaCartPlus>
            <span className='amount-items'>{totalAmount}</span>
        </span>
       
    </nav>
  )
}

export default NavBar