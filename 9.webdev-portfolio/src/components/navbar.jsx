import React from 'react'
import { links } from '../assets/data'

const Navbar = () => {
  return (
    <nav className="bg-lime-100">
        <div className='align-element flex flex-col
                            sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
              <h2 className='text-3xl font-bold'>
                  Web <span className='text-lime-600'>Dev</span>
              </h2>
              <div className='flex gap-x-3'>
                { links.map((link)=> 
                      <a key={link.id} href={link.href} 
                          className='capitalize text-lg tracking-wide hover:text-lime-700 duration-300'>
                          {link.text}
                      </a>) }
              </div>
        </div>
    </nav>
  )
}

export default Navbar