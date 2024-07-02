import { createBrowserRouter } from "react-router-dom";
import { LoginForm,Loading,Forecasts } from "./components";
import { Suspense } from "react"; 
import ForecastLoader from "./pages/Forecast/ForecastLoader";
import SinglePageError from "./pages/Error/SinglePageError";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
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
]);
