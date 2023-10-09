import { Fragment, useState } from "react";

const UseStageTimer = () => {
    let [counter,setCounter] = useState(0);

    const handleClick = () =>{
        counter = counter +1;
        setTimeout(()=>{
            setCounter(counter);
        },3000)
     
    }

    const handleClick2 = () =>{
        setTimeout(()=>{
            //con currrent state tengo el ultimo valor por ello tambien lo puedo hacer de esta forma
            setCounter((currentState)=> currentState + 1);
        },3000)
     
    }

  return (
    <Fragment>
        <div>Ejemplo 4: con setTime; actualiza el contador 3s despues {counter}</div>
        <br></br>
        <button className="button--small" onClick={handleClick}>Implementacion 1 next</button> -
        <button className="button--small" onClick={handleClick2}>Implementacion 2 next</button>
    </Fragment>
   
  )
}

export default UseStageTimer