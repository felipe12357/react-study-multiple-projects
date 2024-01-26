import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import { FaBars } from 'react-icons/fa6';
import { FiGrid } from 'react-icons/fi';
import Filters from '../../common/Filters';
import Pagination from '../../common/Pagination';

const Products = () => {
  const { data:productData,meta } = useLoaderData();
  const [selectedView,setView] = useState('List')
  //console.log(productData,meta);
  const filterOptions = [
      {label:'category',options:meta.categories},
      {label:'company',options:meta.companies},
      {label:'sortby',options:['a-z','z-a','hight price','low price']}
  ];
  return (
    <>
      <Filters searchWord="Products" filterOptions={filterOptions}></Filters>
      <div className='bg-base-200 mt-8 mb-12 flex justify-between rounded-lg p-6'>
        <span>{meta.pagination.total} Products 
          <div className='mt-8'>
            <Pagination pageInfo={meta.pagination}/>
          </div>
        </span>
          <span className='flex'>  
            <button className={`btn mr-4 btn-circle btn-sm ${(selectedView==='List') && 'btn-primary'}`} onClick={()=>{setView('List')}}>
                <FaBars className={`h-4 w-4`} /> 
            </button>
            <button className={`btn  mr-4 btn-circle btn-sm ${(selectedView==='Grid') && 'btn-primary'}`} onClick={()=>{setView('Grid')}}>
                <FiGrid className={`h-4 w-4`} /> 
            </button>
          </span>
      </div>
     
      {
        (meta.pagination.total === 0) ?
          <h4 className='text-2xl mt-16'>Sorry, no products matched your search...</h4> :
        (selectedView === 'List') ?  
          <ProductList  productList={productData}></ProductList> :
          <ProductGrid productList={productData}></ProductGrid>
      }
      <Pagination pageInfo={meta.pagination}/>
    </>
  )
}

export default Products