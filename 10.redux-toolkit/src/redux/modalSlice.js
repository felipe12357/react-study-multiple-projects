import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal:false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        setModal:(state,{payload})=>{
            state.showModal = payload;
        },
    }
})

export const {setModal} = modalSlice.actions;
export default modalSlice.reducer;