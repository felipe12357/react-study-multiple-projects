import React from 'react'
import NavBar from './NavBar';
import CarContainer from './CartContainer';
import { useReducer } from "react";
import { cartReducer,defaultCartState } from './reducer/cartReducer';
import {calculateTotals} from './utilities/cart-calculations';

const ShoppingCartWithoutContext = () => {
  const [cartState,dispatch] = useReducer(cartReducer,defaultCartState);
  const {totalAmount,totalPrice} = calculateTotals(cartState.productList);

  return (
    <>
      <h5>Al eliminar el contexto encontre q sin él, el componente navbar pierde conexión con el state,
        del tal forma que cuando uno aumenta o decrementa el numero de celulares el carrito no tomaba el cambio.
        como solución alternativa se compartio el state propiedad.
      </h5>
      <NavBar totalAmount={totalAmount}></NavBar>
      <CarContainer totalPrice={totalPrice} cartState={cartState} dispatch={dispatch}></CarContainer>
    </>
  )
}

export default ShoppingCartWithoutContext