
import { useState } from 'react'

const UseCustomHookFetchData = (url,amount) => {

    const [dataList,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);

    const getData=()=>{

        (async ()=>{
            setIsLoading(true);
            const response = await fetch(url);
            setIsError(!response.ok)
            const dataListResponse = await response.json();
            const dataListT = dataListResponse.filter((val, index)=> {return index<amount});
            setData(dataListT);

            //La api retorna la informacion muy rapido por ello simulo 3 segundos
            setTimeout(()=>{
                setIsLoading(false);
            },3000)  

        })()
    }

  return {getData,dataList,isLoading,isError}
}

export default UseCustomHookFetchData