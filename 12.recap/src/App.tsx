
import './App.scss'
import { RouterProvider} from "react-router-dom";
import { routes } from './routing';
import { StrictMode } from 'react';

function App() {
  return (
    <StrictMode>
      <RouterProvider router={routes}></RouterProvider>
    </StrictMode>
  )
}

export default App
