import { Outlet } from "react-router-dom"
import { HeaderComponent } from "./components/header/Header"

export const MainLayout = () =>{
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Outlet ></Outlet> 
        </>
    )
}