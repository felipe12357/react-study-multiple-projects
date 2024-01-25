import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format-price';

const ProductGrid = ({productList}) => {

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {   productList?.map(({id, attributes}) => {
                const {title,price,image} = attributes;
                return  <Link to={`/product/${id}`} key={id} 
                            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
                            <figure className='px-4 -pt-4'>
                                <img src={image} alt={title} className='rounded-xl h-64 w-full object-cover'></img>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className='card-tittle capitalize tracking-wider'>
                                    <span className='text-secondary'>{formatPrice(price)}</span>
                                </h2>
                            </div>
                        </Link>
            })
        }
    </div>
  )
}

export default ProductGrid