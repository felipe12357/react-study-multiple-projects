import { lazy } from "react";
export { Loading } from "./Loading"; 
export { LoginForm } from "../pages/LoginForm"; 
export const Forecasts  = lazy(()=>import("../pages/Forecast/Forecasts")); 
