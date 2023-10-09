import { useEffect, useState } from "react"

const UseEffectConditionalRender = () => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(!isLoading);
            console.log('actualiza',isLoading)
        },3000)  
    },[]) 

    if(isLoading){
        return  <h3>Loading ...</h3>
    }
    return (
        <div>Loaded!</div>
    )
}

export default UseEffectConditionalRender