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

          <table className='table table-zebra'>
            <thead>
              <tr> 
                <th>Name</th><th>Address</th><th>Products</th><th>Cost</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              { data.map(({attributes:att,id},index) =>{
                  return <tr key={id}>
                    <td>{att.name}</td>
                    <td>{att.address}</td>
                    <td>{att.cartItems.length}</td>
                    <td>{att.orderTotal}</td>
                    <td>{new Date(att.updatedAt).toLocaleDateString("en-US", options)}</td>
                  </tr>
                })
              }
            </tbody>  
          </table>
          <div className='flex justify-end'>
            <Pagination pageInfo={meta.pagination}/>
          </div>
        </>
      }
    </section>
  )
}

export default Orders