import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format-price';

const ProductList = ({productList}) => {

  return (
    <>
        {   productList?.map(({id, attributes}) => {
                const {title,price,image,company} = attributes;
                return  <Link to={`/product/${id}`} key={id} 
                            className='p-8 rounded-lg gap-x-8 flex flex-col mb-12 sm:flex-row bg-base-200 shadow-xl hover:shadow-2xl duration-300 group'>
                            <figure className='w-full h-44 sm:w-44' >
                                <img src={image} alt={title} className='rounded-xl w-full h-full object-cover group-hover:scale-105 transition duration-300'></img>
                            </figure>
                            <div className="capitalize pt-2">
                                <h2 className='text-2xl mb-2'>{title}</h2>
                                <span className='text-xl'>{company}</span>
                            </div> 
                            <div className="grow text-right sm:self-center">
                                <h2>{formatPrice(price)}</h2>
                            </div> 
                        </Link>
            })
        }
    </>
  )
}

export default ProductList