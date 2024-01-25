import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Pagination = ({pageInfo}) => {
    const {pageCount,page} = pageInfo;
    const {pathname,search} = useLocation();
    const navigate = useNavigate();
    const handlePageChange=(pageNumber)=>{
        const concatCharacter = (search) ? '&' : '?';
        navigate(`${pathname}${search}${concatCharacter}page=${pageNumber}`)
    }

  return (
    <div className="join flex justify-end">
        {
            (page>1) &&
            <>
                <button className="join-item btn btn-sm" onClick={()=>handlePageChange(page-1)}>Previous</button>
                <button className="join-item btn btn-sm" onClick={()=>handlePageChange(page-1)}>{page-1}</button>
            </> 
        }
        <button className="join-item btn btn-active btn-sm">{page}</button>
        {
            (pageCount>page) && 
            <>
                <button className="join-item btn btn-sm" onClick={()=>handlePageChange(page+1)}>{page+1}</button>
                <button className="join-item btn btn-sm" onClick={()=>handlePageChange(page+1)}>Next</button>
            </>
        }
    </div>
  )
}

export default Pagination