import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './GlobalContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryTaskClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <QueryClientProvider client={queryTaskClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} ></ReactQueryDevtools>
    </QueryClientProvider>
  </AppContextProvider>
);
