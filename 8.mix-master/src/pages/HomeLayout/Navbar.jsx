import React from 'react'
import './homelayout.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-bar'>
        <span className='logo'>MixMaster</span>
        <nav className='nav-container'>
            <ul>
                {/*importante navlink agrega la clase active segun la ruta q este activa */}
                <li> <NavLink to='/'> Home </NavLink></li>
                <li> <NavLink to='/about'> About </NavLink></li>
                <li> <NavLink to='/newsletter'> Newsletter </NavLink> </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar