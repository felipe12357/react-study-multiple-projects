import  { createBrowserRouter } from 'react-router-dom';
import { About,Cart,Checkout,Error,Home,Login,MainLayout,Orders,Products,Register,SingleProduct,SinglePageError } from './pages';
import { home_loader } from './pages/Home/home.loader';
import { product_loader } from './pages/SingleProduct/product.loader'
import { products_loader } from './pages/Products/producs.loader';
import  Loading  from './components/Loading';
import { Suspense } from 'react';

export const routes = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    errorElement:<Error/>,
    children:[
        //actions para post , loaders para GET
        { index:true, element:
            <Suspense fallback={<Loading/>}>
                 <Home></Home>
            </Suspense>, 
            errorElement:<SinglePageError/>,loader:home_loader
        },
        { path: 'products', element:
            <Suspense fallback={<Loading/>}>
                 <Products></Products>,
            </Suspense>,
            errorElement:<SinglePageError/>,loader:products_loader
        },
        { path: 'product/:id', element:
            <Suspense fallback={<Loading/>}>
                <SingleProduct></SingleProduct>
            </Suspense>,
            errorElement:<SinglePageError/>,loader:product_loader
        },
        { path: 'cart',element:
            <Suspense fallback={<Loading/>}>
                <Cart></Cart>
            </Suspense>
        },
        { path: 'about',element:
            <Suspense fallback={<Loading/>}>
                <About></About>
            </Suspense>
        },
        { path: 'checkout', element:
            <Suspense fallback={<Loading/>}>
                <Checkout></Checkout>
            </Suspense>
        },
        { path: 'orders', element:
            <Suspense fallback={<Loading/>}>
                <Orders></Orders>
            </Suspense>
        }
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