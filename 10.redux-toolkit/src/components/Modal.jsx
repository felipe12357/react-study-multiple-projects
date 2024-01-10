import React from 'react'
import { clearCart } from '../redux/cartSlice';
import { setModal } from '../redux/modalSlice';
import { useDispatch } from 'react-redux';

const Modal = () => {
    const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='button-container'>
            <button type="button" className='button--primary button--small'onClick={()=>{ dispatch(setModal(false)); dispatch(clearCart(false)) }}> Confirm </button>
            <button type="button" className='button--delete button--small' onClick={()=>dispatch(setModal(false))}> Cancel </button>
        </div>
    </aside>
  )
}

export default Modal