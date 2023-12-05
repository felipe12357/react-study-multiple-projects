import { createContext } from "react";
import PropTypes from 'prop-types';
import { useContext,useReducer } from "react";
import { cartReducer,defaultCartState } from '../reducer/cartReducer';
import { calculateTotals } from '../utilities/cart-calculations';


export const ContextAPIGlobalContext = createContext();
export const useContextAPIGlobal = () => useContext(ContextAPIGlobalContext);


export const CartGlobalContextProvider = (props) => {

    const [cartState,dispatch] = useReducer(cartReducer,defaultCartState);
    const {totalAmount,totalPrice} = calculateTotals(cartState.productList);


    return (
        <ContextAPIGlobalContext.Provider value={{cartState,dispatch,totalAmount,totalPrice}} >
           {props.children}
        </ContextAPIGlobalContext.Provider>
    )
}


CartGlobalContextProvider.propTypes = {
    children: PropTypes.node,
}