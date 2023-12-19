import { createContext,useContext, useState } from "react";

const AppContext = createContext();
export const useAppGlobalContext= () => useContext(AppContext);

export const AppContextProvider = (props) => {
    
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const [currentSearch,setCurrentSearch] = useState('');
    
    return (
        <AppContext.Provider value={{isDarkTheme,setIsDarkTheme,currentSearch,setCurrentSearch}}>
           {props.children}
        </AppContext.Provider>
    )
}