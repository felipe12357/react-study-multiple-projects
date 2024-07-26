import { useState } from "react";

export const UsePaginatorHook = <T,>(elementList:T[])=>{
    const ELEMENTS_X_PAGE= 5;
    const numOfPages = Math.ceil(elementList.length/ELEMENTS_X_PAGE);

    const [elementsToDisplay,setElements]=useState(elementList.slice(0,ELEMENTS_X_PAGE));
     
    const setElementsToDisplay=(currentPage:number)=>{
        const endingPosition = ELEMENTS_X_PAGE*currentPage -1;
        const initialPosition = endingPosition-ELEMENTS_X_PAGE+1;
        setElements(elementList.slice(initialPosition,endingPosition+1));
    }

    return {elementsToDisplay,numOfPages,setElementsToDisplay}
}