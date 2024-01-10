import { FaCartPlus } from 'react-icons/fa';

const NavBar = ({totalAmount}) => {
 
  return (
    <nav className='nav-cart'>
        <span>Use Reducer without context</span>
        <span>
            <FaCartPlus></FaCartPlus>
            <span className='amount-items'>{totalAmount}</span>
        </span>
       
    </nav>
  )
}

export default NavBar