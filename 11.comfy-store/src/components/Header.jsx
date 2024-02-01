import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { clearCart } from '../redux/cartSlice';
const Header = () => {

  const { user } = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout=()=> {
    dispatch(logout());
    dispatch(clearCart());
    navigate('/');
  }

  return (
    <header className='bg-neutral py-2 text-neutral-content'>
        <div className='align-element flex justify-center sm:justify-end'>
            <div className='flex gap-x-6 justify-center items-center'>
              {
                (!user) ? <>
                  <Link to='/login' className='link link-hover'>Sign in / Guest</Link>
                  <Link to='/register' className='link link-hover '>Create an Account</Link>
                </>:<>
                  <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
                  <button className='btn btn-xs btn-outline btn-primary' onClick={()=>handleLogout()}> Logout</button>
                </>
              }
            </div>
        </div>
        
    </header>
  )
}

export default Header