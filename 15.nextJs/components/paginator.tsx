"use client"

import Link from "next/link"
import { redirect } from "next/navigation"

type PaginatorComponentProps = {
    page:string,
    currentPageNumber:number,
    lastPage:number,
    searchParam?:string
}
const PaginatorComponent = ({page,currentPageNumber,lastPage,searchParam}:PaginatorComponentProps)=>{
    if(currentPageNumber>lastPage)
        redirect('/admin/products');

    const arrayPages =new Array(lastPage).fill('');

    return (
        <nav className="flex justify-center align-middle py-10">
            { (currentPageNumber>1) && 
                <Link href={`${page}?page=${currentPageNumber-1}${(searchParam!==undefined) ? `&search=${searchParam}`:''} `} 
                    className="bg-white ring-gray-300 px-4 py-2 text-sm text-gray-900 ring-1 ring-inset">
                        &#10096;
                </Link> }
            
            { arrayPages.map((val,i)=>{
                return <Link href={`${page}?page=${i+1}${(searchParam!==undefined) ? `&search=${searchParam}`: ''} `} key={i}
                        className={ `${(i+1 === currentPageNumber) ? `bg-gray-900 text-white` :`bg-white text-gray-900`} ring-gray-300 px-4 py-2 text-sm  ring-1 ring-inset`}>
                        {i+1}
                </Link>
            })}

            

            { (currentPageNumber<lastPage) && 
                <Link href={`${page}?page=${currentPageNumber+1}${(searchParam!==undefined) ? `&search=${searchParam}`:''}`} 
                    className="bg-white ring-gray-300 px-4 py-2 text-sm text-gray-900 ring-1 ring-inset">&#10097;</Link> }
            
        </nav>
    )
}
export default PaginatorComponent;