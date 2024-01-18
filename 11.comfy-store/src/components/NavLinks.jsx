import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    {id:1, url:'/', text:'Home'},
    {id:2, url:'/about', text:'About'},
    {id:3, url:'/products', text:'Products'},
    {id:4, url:'/cart', text:'Cart'},
    {id:5, url:'/checkout', text:'Checkout'},
    {id:6, url:'/orders', text:'Orders'},
  ]
  return (
    <>
        {links.map(link =><li key={link.id} className='mt-1 mr-1'> <NavLink className="capitalize" to={link.url}>{link.text}</NavLink></li>)}
    </>
  )
}

export default NavLinks