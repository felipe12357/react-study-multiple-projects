interface PaginationProps {
    numOfPages: number;
    currentPage: number;
    updatePage:(page:number)=>void;
}

//se puede usar asi:
//export const Pagination:React.FC<{numOfPages: number,currentPage: number}>=({numOfPages, currentPage})=>{

//o asi:
export const Pagination:React.FC<PaginationProps>=({numOfPages, currentPage,updatePage})=>{

    const content:number[]=[];

    for (let page = 0; page <numOfPages; page++) {
        content.push(page+1);
    }
    return (
        content.map((num:number,index:number)=>
            <span className={`button button-margin ${ (num === currentPage) && 'button_active'} `}
                    key ={index} onClick={()=>updatePage(num)}>
                {num}
            </span>
        )
    )
}