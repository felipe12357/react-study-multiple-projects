
import './App.css'
import { routes,queryClient } from './routing';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  )
}

export default App
