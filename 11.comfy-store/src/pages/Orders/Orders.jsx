import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import Pagination from '../../common/Pagination';

const Orders = () => {
  const {data,meta} = useLoaderData();
  const options = { hour: 'numeric', minute: 'numeric', month: 'short', day: 'numeric',year: 'numeric' };

  return (
    <section>
      { (meta.pagination.total === 0) ?  <SectionTitle title="you dont have orders"></SectionTitle> :
        <>
          <SectionTitle title="Your Orders"></SectionTitle>

          <div className='bg-base-200 mt-2 mb-8 rounded-lg p-6'>
              <h2 className='text-xl py-5'>Total Orders: {meta.pagination.total}</h2>
              <Pagination pageInfo={meta.pagination}/>            
          </div>

          <div className='grid grid-cols-5 text-xl py-3 pl-3 bg-base-200'>
            <span>Name</span>
            <span>Address</span>
            <span>Products</span>
            <span>Cost</span>
            <span>Date</span>
          </div>
          {
              data.map(({attributes:att,id},index) =>{
                return <div className={`grid grid-cols-5 py-3 pl-3 ${(index%2===1)? 'bg-base-200' : 'bg-base-300'}`} key={id}>
                  <span>{att.name}</span>
                  <span>{att.address}</span>
                  <span>{att.cartItems.length}</span>
                  <span>{att.orderTotal}</span>
                  <span>{new Date(att.updatedAt).toLocaleDateString("en-US", options)}</span>
                </div>
              })
            }
            <div className='flex justify-end'>
              <Pagination pageInfo={meta.pagination}/>
            </div>
        </>
      }
    </section>
  )
}

export default Orders