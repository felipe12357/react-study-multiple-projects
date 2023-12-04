
import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState,useContext } from "react";

export const ContextAPIGlobalContext = createContext();
export const useContextAPIGlobal = () => useContext(ContextAPIGlobalContext);


export const ContextGlobalProvider = (props) => {

    const [isSideBarOpen,setSideBarState] = useState(false);
    const [isModalOpen,setModalState] = useState(false);


    return (
        <ContextAPIGlobalContext.Provider value={{isSideBarOpen,isModalOpen,setSideBarState,setModalState}}>
           {props.children}
        </ContextAPIGlobalContext.Provider>
    )
}


ContextGlobalProvider.propTypes = {
    children: PropTypes.node,
}