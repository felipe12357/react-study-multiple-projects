import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import  Navbar  from './Navbar';

const HomeLayout = () => {
   const testValue="felipe"; //solo para mostrar el context q tiene disponible react router
  return (
    <>
       <Navbar></Navbar>
       <section className='main_layout'>
          {/* permite visualizar el contenido de child */}
          <Outlet context={{testValue}}></Outlet> 
       </section>
    </>
  )
}

export default HomeLayout