import  { createBrowserRouter } from 'react-router-dom';
import { About, Cart,Checkout,Error,Home,Login,MainLayout,Orders,Products,Register,SingleProduct,SinglePageError } from './pages';
import { home_loader } from './pages/Home/Home';
import { product_loader } from './pages/SingleProduct/SingleProduct'
import { products_loader } from './pages/Products/Products';

export const routes = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    errorElement:<Error/>,
    children:[
        //actions para post , loaders para GET
        { index:true, element:<Home></Home>, errorElement:<SinglePageError/>,loader:home_loader },
        { path: 'products', element:<Products></Products>, errorElement:<SinglePageError/>,loader:products_loader},
        { path: 'product/:id', element:<SingleProduct></SingleProduct>, errorElement:<SinglePageError/>,loader:product_loader},
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