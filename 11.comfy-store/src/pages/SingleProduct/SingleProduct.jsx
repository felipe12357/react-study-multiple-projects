import {React, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import {formatPrice } from '../../utils/format-price';
import '../../common/common.css';
import {addItem}  from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const {attributes:productData,id:productId} = useLoaderData();
  const [state_color,setColor] = useState(productData.colors[0]);
  const [state_amount,setAmount] = useState(1);

  const handleFormSubmit = ()=>{
    dispatch(addItem({ 
        ...productData,
        cartID:productId + state_color,
        selectedColor:state_color,
        id:productId,
        amount:state_amount
    }))
  }

  return (
    <>
    <section className="grid gap-10 md:grid-cols-2">
       <figure className='place-self-center'>
            <img src={productData.image} alt={productData.title} className='rounded-lg object-cover sm:h-3/4 sm:w-3/4'></img>
        </figure>
       <div>
        <h1 className="capitalize text-3xl font-medium">{productData.title}</h1>
        <h3 className="capitalize text-xl text-neutral-content font-bold pt-4">{productData.company}</h3>
        <p className="text-xl pt-3">{ formatPrice(productData.price) }</p>
        <p className="text-justify pt-5 text-xm leading-8">
          {productData.description}
        </p>
        <form className="pt-4">
          <label className="text-md">Colors</label>
          <div className='mt-2'>
            {productData.colors.map((color,index)=>{
              return <input key={index} type="radio" name={`radio-${index}`} 
                      className="radio mr-4 custom-radio-input " checked={(color ===state_color)}
                      value={color} onChange={()=>setColor(color)}
                     style={{"backgroundColor":color, "--selectedColor":color}} 
                    />
            })}
          </div>
          <div className="label mt-4">
            <span className="text-md">Amount</span>
          </div>
          <div>
            <select className="select select-primary select-sm" value={state_amount}  onChange={e=>setAmount(parseInt(e.target.value))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mt-4">
            <button type="button" className='btn btn-primary mt-4 btn-sm' onClick={handleFormSubmit}>Add To Bag</button>
          </div>
        </form>
       </div>
    </section>
    </>
  )
}

export default SingleProduct