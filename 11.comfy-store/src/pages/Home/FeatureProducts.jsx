import React from 'react'
import SectionTitle from '../../common/SectionTitle'
import ProductGrid from '../Products/ProductGrid'
import {useLoaderData } from 'react-router-dom';

const FeatureProducts = () => {
    //extraigo la informacion del loading asignado en la ruta home
    //esto genera una dependencia a estar atado a esta ruta OJO
  const productList = useLoaderData();
  return (
    <div className='pt-24'>
        <SectionTitle title="Feacture Products"></SectionTitle>
        <ProductGrid productList={productList}></ProductGrid>
    </div>
  )
}

export default FeatureProducts