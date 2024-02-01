import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const getUserStateLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('user')) || null
}

const initialState = {
    user:getUserStateLocalStorage(),
    theme: localStorage.getItem('currentTheme') || 'dim'
}

const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        login:(state,{payload}) =>{
            state.user=payload
            localStorage.setItem('user',JSON.stringify(state.user));
        },
        logout:(state) =>{
            state.user = null,
            state.theme = initialState.theme;
            localStorage.removeItem('user');
            toast.success('Logout succesfully');
        },
        toogleTheme:(state,{payload}) =>{
           state.theme = payload;
           localStorage.setItem('currentTheme',payload);
           document.documentElement.setAttribute('data-theme',payload);
        }
    }
})
export const {login,logout,toogleTheme} = userSlice.actions;
export default userSlice.reducer;