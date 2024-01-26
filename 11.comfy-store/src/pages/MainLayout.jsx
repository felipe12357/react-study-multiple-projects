import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import {useNavigation} from 'react-router-dom';

const MainLayout = () => {
  const {state} = useNavigation();
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
        {(state === "loading") && 
              <Loading></Loading>
        }
        <section className="align-element py-20">
            <Outlet ></Outlet> 
        </section>
    </>
  )
}

export default MainLayout