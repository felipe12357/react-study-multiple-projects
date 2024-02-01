import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format-price';
import { FormInput,SubmitBtn } from '../../common/index'
import { Form } from 'react-router-dom'

const Checkout = () => {
  const { totalWithOutTaxes,shipping,tax,total,numItemsInCart } = useSelector((store)=>store.cart);

  return (
    (numItemsInCart ===0 ) ? <SectionTitle title="Your cart is empty"></SectionTitle> :
   <>
      <SectionTitle title="Place Your Order"></SectionTitle>
      <div className='grid grid-cols-2 gap-2'>
        <Form method="Post" className='mt-12' >
            <h3 className='font-bold text-xl mb-8'>Shipping Information</h3>
            <FormInput type="text" name="name" label="First Name" inputSize="sm"></FormInput>
            <FormInput type="text" name="address" label="Address" inputSize="sm"></FormInput>
            <div className='mt-8 max-w-xs'>
              <SubmitBtn label="Place your order"></SubmitBtn>
            </div>
        </Form>
        <div className='mt-12 rounded-lg bg-base-200 p-8 self-start '>
          <div className='flex justify-between '>
            <h4>SubTotal:</h4>
            <span>{formatPrice(totalWithOutTaxes)}</span>
          </div>
          <div className='flex justify-between pt-2'>
            <h4>Shipping:</h4>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className='flex justify-between pt-2'>
            <h4>Tax:</h4>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className='flex justify-between pt-4 font-bold'>
            <h4>Total Order:</h4>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>
   </>
  )
}

export default Checkout