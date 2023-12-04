//este contexto es para mirar la diferencia con el global.. 
// tomando como ejemplo el utilizado en navbar 
import { useState } from 'react';
import { createContext } from "react";
import SideBarModalNotGlobalContext from './SideBarModalNotGlobalContext'

export const ContextNormal = createContext();
const ContextAPINotGlobalProvider = () => {
  const [isSideBarOpen,setSideBarState] = useState(false);
  const [isModalOpen,setModalState] = useState(false);

  return (
    <ContextNormal.Provider value ={{isSideBarOpen,isModalOpen,setSideBarState,setModalState}}>
        <SideBarModalNotGlobalContext></SideBarModalNotGlobalContext>
    </ContextNormal.Provider>
  )
}

export default ContextAPINotGlobalProvider