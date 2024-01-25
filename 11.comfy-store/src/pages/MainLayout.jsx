import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';

const MainLayout = () => {
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
        <Loading></Loading>
        <section className="align-element py-20">
            <Outlet ></Outlet> 
        </section>
    </>
  )
}

export default MainLayout