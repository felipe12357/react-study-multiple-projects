import {React,memo} from 'react'
import {  BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useCallback,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toogleTheme } from '../redux/userSlice';

const themes = ['dim','cmyk'];

const NavBar = () => {
    const { numItemsInCart } = useSelector((store)=>store.cart);
    const { theme } = useSelector((store)=>store.user);
    const dispatch = useDispatch();

   const handleTheme =useCallback(()=>{
        const newTheme = (theme===themes[0]) ? themes[1]: themes[0];
        dispatch(toogleTheme(newTheme));
   })

   useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
    },[])

  return (
    <nav className='bg-base-200'>
         {/* the class navbar comes from daisy */}
         <div className='navbar align-element '>
            <div className='navbar-start'>
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center '> C </NavLink>
                {/* dropdown class comes from daisy */}
                <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <FaBars className='h-6 w-6' />
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-52' >
                        <NavLinks></NavLinks>
                    </ul>
                </div> 
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal '>
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className='navbar-end'>
                {/* this functionality comes from daisy */}
                <label  className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" name="themeChecker" onChange={()=>handleTheme()} checked={(theme===themes[1])} />
                    <BsSunFill className='swap-on text-amber-400 h-6 w-6' />
                    <BsMoonFill className='swap-off  text-slate-400 h-6 w-6' />
                </label>
                <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                    {/* indicator class comes from daisy */}
                    <div className='indicator'>
                        <BsCart3 className='h-6 w-6' />
                        <span className='badge badge-sm badge-primary indicator-item'>
                            { numItemsInCart }
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default memo(NavBar)