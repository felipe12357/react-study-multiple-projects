import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
const MainLayout = () => {
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
        <section className="align-element py-20">
            <Outlet ></Outlet> 
        </section>
    </>
  )
}

export default MainLayout