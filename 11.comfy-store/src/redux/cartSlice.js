
import { calculateTotals } from '../utils/cart-calculation';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState ={
    cartItems: [],
    numItemsInCart:0,
    totalWithOutTaxes:0,
    shipping:50,
    tax:0,
    total:0
}

const getCartStateLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('cartState')) || defaultState
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:getCartStateLocalStorage(),
    reducers:{
        addItem:(state,{payload})=>{

            const position = state.cartItems.findIndex((product)=>payload.cartID === product.cartID)
            if(position>=0)
                state.cartItems[position].amount += payload.amount
            else
                state.cartItems.push(payload);

            cartSlice.caseReducers.generateTotals(state);
            toast.success('Product added to the cart!')
        },
        clearCart:(state) =>{
            state = defaultState;
            localStorage.setItem('cartState',JSON.stringify(state))
        },
        removeItem:(state,{payload}) =>{
            state.cartItems = state.cartItems.filter(product => product.id !== payload.id);
            toast.success('Product removed from the cart!')
            cartSlice.caseReducers.generateTotals(state);
        },
        editItem:(state,{payload})=>{
            const cartItem = state.cartItems.find(item=>item.id=== payload.cartID);
            cartItem=payload.value;
            toast.success('Product updated in the cart!')
            cartSlice.caseReducers.generateTotals(state);
        },
        generateTotals:(state)=>{
            const {totalAmount,totalPrice} =calculateTotals(state.cartItems);
            state.numItemsInCart = totalAmount;
            state.totalWithOutTaxes = totalPrice;
            state.tax = 0.1 * totalPrice;
            state.total = state.tax + totalPrice;
            localStorage.setItem('cartState',JSON.stringify(state))
        }
    }
})
export const {clearCart,editItem,addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;