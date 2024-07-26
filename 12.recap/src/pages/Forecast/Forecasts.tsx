import { useLoaderData } from "react-router-dom";
import { matchDto } from "../../dtos/match.dto";
import {MatchComponent} from '../../components/match/match';
import { Pagination } from "../../components/paginator/pagination";
import { useState } from "react";
import { UsePaginatorHook } from "../../hooks/UsePaginatorHook";
const Forecasts = () => {

    const matchesInfo = useLoaderData() as matchDto[];
    const [currentPage,setCurrentPage] = useState(1);
    const {elementsToDisplay,setElementsToDisplay,numOfPages} =UsePaginatorHook(matchesInfo)

    const updatePageFunc = (num:number) =>{
        setCurrentPage(num);
        setElementsToDisplay(num);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formValues = Object.fromEntries(formData);
        console.log(formValues);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {elementsToDisplay.map((match: matchDto,index:number) => {
                    match = {...match,id:index+1};
                    return  <MatchComponent {...match} key={index}></MatchComponent>
                })
                }
                <div>
                    <Pagination numOfPages={numOfPages} currentPage={currentPage} updatePage={updatePageFunc}></Pagination>
                    <button >Guardar</button>
                </div>
            </form>
        </>
    )
}
export default Forecasts;

