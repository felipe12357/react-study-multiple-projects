
import './App.scss'
import { RouterProvider} from "react-router-dom";
import { routes } from './routing';
import { StrictMode } from 'react';
import {AppContextProvider} from './GlobalContext';

function App() {
  return (
    <StrictMode>
      <AppContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AppContextProvider>
    </StrictMode>
  )
}

export default App
