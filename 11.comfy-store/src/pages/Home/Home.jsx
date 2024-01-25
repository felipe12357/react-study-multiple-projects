import React from 'react'
import InfoHome from './InfoHome';
import { UseFetchData } from '../../hooks/UseHandlerAPIHook'; 
import FeatureProducts from './FeatureProducts';

export const home_loader =async()=>{
    const response = await UseFetchData('products?featured=true');
    return response.data;
}

const Home = () => {
  return (
    <>
        <InfoHome></InfoHome>
        <FeatureProducts></FeatureProducts>
    </>
  )
}

export default Home