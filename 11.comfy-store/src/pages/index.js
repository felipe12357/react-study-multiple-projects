
import  { lazy } from 'react';
export const About = lazy(()=>import('./About/About'));
export const Cart = lazy(()=>import('./Cart/Cart'));
export const Checkout = lazy(()=>import('./Checkout/Checkout'));
export const Home = lazy(()=>import('./Home/Home'));
export const Orders = lazy(()=>import('./Orders/Orders'));
export const Products = lazy(()=>import('./Products/Products'));
export const Register = lazy(()=>import('./Register/Register'));
export const SingleProduct = lazy(()=>import('./SingleProduct/SingleProduct'));


export {default  as Error} from './Error/Error';
export {default  as Login} from './Login/Login';
export {default as MainLayout } from './MainLayout';
export {default as Header } from '../components/Header';
export {default as NavBar} from '../components/NavBar';
export {default as SinglePageError} from './Error/SinglePageError';
export {default as SectionTitle} from '../common/SectionTitle';