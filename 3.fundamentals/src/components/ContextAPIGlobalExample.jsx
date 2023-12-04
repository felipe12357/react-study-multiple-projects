
import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState,useContext } from "react";

export const ContextAPIGlobalContext = createContext();
export const UseContextAPIGlobal = () => useContext(ContextAPIGlobalContext);


export const ContextAPIGlobalExample = (props) => {

    const [user1,setUser1] = useState('pepe');
    return (
        <ContextAPIGlobalContext.Provider value={{user1, setUser1}}>
           {props.children}
        </ContextAPIGlobalContext.Provider>
    )
}

ContextAPIGlobalExample.propTypes = {
    children: PropTypes.node,
}