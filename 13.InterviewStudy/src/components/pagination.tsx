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
    return (<>
        {content.map((num:number)=>{
            const buttonStyle = {
                    padding:'10px 10px', marginLeft:'5px', border:'solid red 2px',
                    cursor:'pointer',
                    backgroundColor: num ===currentPage ? 'red' : 'white',
                    color: num ===currentPage ? 'white':'black'
            }
            return <span style={buttonStyle} onClick={()=>updatePage(num)}>{num}</span>
        })}
    </>)
}