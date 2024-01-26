
import './App.css'
import  { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout,About,Newsletter,Error,Cocktail,SinglePageError,Landing } from './index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { cocktail_loader } from './pages/Landing/Cocktail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { news_letter_form_action } from './pages/Newsletter/Newsletter';
import { landing_loader } from './pages/Landing/Landing';

const router = createBrowserRouter([
  { path:'/', 
    element: <HomeLayout></HomeLayout>,
    errorElement:<Error/>,
    children: [
      //con el index asigno q landing va ser accedida con el url: "/""
      { index:true, element:<Landing></Landing>, errorElement:<SinglePageError/>,loader:landing_loader },  
      { path:'cocktail/:id', element:<Cocktail></Cocktail>, errorElement:<SinglePageError/>,loader:cocktail_loader },
      { path:'about', element:<About></About>, errorElement:<SinglePageError/> },
      { path:'newsletter', element:<Newsletter></Newsletter>, errorElement:<SinglePageError/>,action:news_letter_form_action },
    ]
  }
])

const queryClient = new QueryClient({defaultOptions:{
  queries:{staleTime:1000*60} //cuanto tiempo las busquedas seran validas en este caso 6min
}});

function App() {
  return (
    <>
      <ToastContainer position='top-center' autoClose={1000}></ToastContainer>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={true} ></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  )
}

export default App
