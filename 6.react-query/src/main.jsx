import React from 'react'
import ReactDOM from 'react-dom/client'
import GroceryBud from './GroceryBud';
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryTaskClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryTaskClient}>
    <GroceryBud></GroceryBud>
  </QueryClientProvider>

)
