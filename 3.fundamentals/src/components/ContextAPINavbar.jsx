import { useState } from "react"
import ContextAPINavLinks from './ContextAPINavLinks';
import { Fragment } from "react";
import { createContext } from "react";

export const NavBarContext = createContext();

const ContextAPINavbar = () => {

    const [user,setUser] = useState({name:'felipe12357'})

    const logHandle=()=> {
        console.log('handeling');
        (user) ? setUser(null) : setUser({name:'felipe12357'})
        
    };
    return (
       
            <NavBarContext.Provider value={{user, logHandle}}>
                 <Fragment>
                    Ejemplo de como pasar informacion atravez de distintos niveles de componentes
                <nav className="navbar">
                    <h5>CONTEXT API</h5>
                    <ContextAPINavLinks></ContextAPINavLinks>
                </nav>
                </Fragment>
            </NavBarContext.Provider>
        
    )
}

export default ContextAPINavbar