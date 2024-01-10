import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItems from '../utilities/mock-cart-items';
import {calculateTotals} from '../utilities/cart-calculations';
import axios from 'axios';
const {totalAmount,totalPrice} = calculateTotals(cartItems);

const initialState ={
    cartItems: [],
    amount:totalAmount,
    total:totalPrice,
    isLoading:false
}

const URL = 'https://www.course-api.com/react-useReducer-cart-project';
export const getCartItems = createAsyncThunk('cart/getCartItems',async(val,thunkAPI)=>{
    try{
        //thunkAPI permiete accerder a todo el state
       // console.log(thunkAPI,val);
       // console.log(thunkAPI.getState())
        const {data} = await axios(URL);
        //tambien puedo llamar acciones
      //  thunkAPI.dispatch(setLoading(true))
        return data;
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue('algo se daño');
    }
   /*  return fetch(URL)
        .then(resp => resp.json())
        .catch(err => console.log(err)) */
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
            state.amount = 0;
            state.total = 0;
        },
        removeItem:(state,action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId );
        },
        handleItemAmount:(state,{payload})=>{   
            const cartItem = state.cartItems.find(item=>item.id=== payload.id);
            cartItem.amount=payload.value;
        },
        setItems:(state,{payload})=>{
            state.cartItems =payload;
        }, 
        setLoading:(state,{payload})=>{
            state.isLoading = payload
        },
        setTotals:(state)=>{
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.totalAmount;
            state.total = totals.totalPrice;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCartItems.pending,(state)=>{
            state.isLoading =true
        }),
        builder.addCase(getCartItems.fulfilled,(state,{payload})=>{
             state.cartItems =payload;
             state.isLoading =false;
        })
        builder.addCase(getCartItems.rejected,(state,action)=>{
            state.isLoading =false;
            //aca recibimos el valor asignado en el catch
            console.log(action);
        })
    },
})

export const {clearCart,removeItem,handleItemAmount,setItems,setLoading,setTotals} = cartSlice.actions;
export default cartSlice.reducer;