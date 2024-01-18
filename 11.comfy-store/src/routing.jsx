import  { createBrowserRouter } from 'react-router-dom';
import { About, Cart,Checkout,Error,Home,Login,MainLayout,Orders,Products,Register,SingleProduct } from './pages';

export const routes = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    errorElement:<Error/>,
    children:[
        { index:true, element:<Home></Home>, errorElement:<Error/> },
        { path: 'products', element:<Products></Products>},
        { path: 'products/:id', element:<SingleProduct></SingleProduct>},
        { path: 'cart',element:<Cart></Cart> },
        { path: 'about', element:<About></About>},
        { path: 'checkout', element:<Checkout></Checkout>},
        { path: 'orders', element:<Orders></Orders>}
    ]
},{
    path:'/register',
    element:<Register />,
    errorElement:<Error/>
},{
    path:'/login',
    element:<Login />,
    errorElement:<Error/>
}
])