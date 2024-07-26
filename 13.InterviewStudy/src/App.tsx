import { useState } from 'react'

import './App.css'
import { Pagination } from './components/pagination'

function App() {

  const [currentPage,setCurrentPage] = useState(2);

  const handlePageChange=(page:number)=>{
    setCurrentPage(page)
  }

  return (
    <>
      <Pagination numOfPages={10} currentPage={currentPage} updatePage={handlePageChange}></Pagination>
    </>
  )
}

export default App
