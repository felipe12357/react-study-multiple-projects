import { ReactElement, createContext,useContext, useState } from "react";
import { userDto } from "./dtos/user.dto";

type dataGlobalContext = {
    user:userDto
    setUser:(val1:userDto)=>void
}

export const AppContext = createContext({});
export const UseAppContext = () => useContext(AppContext) as dataGlobalContext;

//Iterable<ReactNode> cuando son varios child
//ReactElement , cuando es solo 1
export const AppContextProvider = (props: { children: ReactElement }) => {
    const [user,setUser] = useState({username:'',isAdmin:false}); 

    return (
        <AppContext.Provider value={{user, setUser}}>
           {props.children}
        </AppContext.Provider>
    )
}