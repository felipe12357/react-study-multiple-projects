import { ACTION_TYPES__CART_ENUM } from './cartActions';

export const defaultCartState = {
    productList:new Map(),
    loading:false
}


export const cartReducer = (state,action)=>{
    switch(action.type){
        case ACTION_TYPES__CART_ENUM.SET_CART_VALUE:{
            const newValue = new Map(action.payload.elements.map(item =>[item.id,item]));
            return {...state,productList: newValue}
        }
        case ACTION_TYPES__CART_ENUM.UPDATE_AMOUNT:{
            const newCart = new Map(state.productList);
            if(action.payload.value>0){
                const newElement = {...newCart.get(action.payload.id),amount:action.payload.value};
                newCart.set(action.payload.id,newElement);
            }else
                newCart.delete(action.payload.id)

            return {...state,productList:newCart}
        }
        case ACTION_TYPES__CART_ENUM.REMOVE_ELEMENT:{
            const newCart = new Map(state.productList)
            newCart.delete(action.payload.id)
            return {...state,productList:newCart}
        }
        case ACTION_TYPES__CART_ENUM.CLEAR:{
            return {...state,productList:new Map()}
        }
        case ACTION_TYPES__CART_ENUM.SET_LOADING:{
            return {...state,loading:action.payload.value}
        }

        default:
            return state;
    }

}


