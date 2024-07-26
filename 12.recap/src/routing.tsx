import { createBrowserRouter } from "react-router-dom";
import { LoginForm,Loading,Forecasts } from "./components";
import { Suspense } from "react"; 
import ForecastLoader from "./pages/Forecast/ForecastLoader";
import SinglePageError from "./pages/Error/SinglePageError";
import { MainLayout } from "./MainLayout";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/login",
                element:<LoginForm/>,
                errorElement:<SinglePageError/>,
            },{
                path: "/forecasts", 
                //se utiliza el suspense para el lazy loading al igual q lo q se hizo en el index
                element:<Suspense fallback={<Loading/>}>
                        <Forecasts></Forecasts>
                </Suspense>,
                errorElement:<SinglePageError/>,
                loader: async () => await ForecastLoader(),
            }
        ]
    }
]);
