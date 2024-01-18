
import './App.css'
import { routes } from './routing';
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
