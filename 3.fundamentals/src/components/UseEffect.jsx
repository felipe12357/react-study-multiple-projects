//Permite crear acciones como efectos segundarios de otras operaciones
//utiles para operacioens como subscripcions, fetching data, actualizar directmente el DOm
//event listeners, timers, etc.

import { useEffect, useState } from "react"

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [xcounter, setxCounter] = useState(0);

  const handleClick = ()=> setCounter(counter +1);
  const handlexClick = ()=> setxCounter(xcounter +1);

    useEffect(()=>{
        console.log('cada vez q actualiza data, (incluye la carga inicial)');
    })

    useEffect(()=>{
       //este es el equivalente a NG-onInit
        console.log('se ejecuta solo cuando carga');
    },[])

    useEffect(()=>{
        //este es el equivalente a NG-onInit
         console.log('se ejecuta solo cuando carga');
         return ()=>{
            //equivalente a NG destroy
            console.log('se ejecuta cuando se destruye el componente')
         }
     },[])

    useEffect(()=>{
      console.log('se ejecuta solo cuando se actualiza el valor de xcounter');
  },[xcounter]) //aca se pueden incluir varias variables

  return (
    <div><h3>UseEffect:</h3> 
        <ul>
            <li>Accepta 2 argumentos: el primero una funcion callback</li>
            <li>el segundo es opcional - dependency array</li>
            <li>Predeterminadamente se ejecuta cada vez q renderiza</li>
            <li>el primer argumento No puede retornar una promesa</li>
            <li>si el segundo parametro lo setteamos como un array vacio: [], entonces <br></br>
                la funcion solo se efecutara 1 sola vez.
            </li>
        </ul>
        <div>
            {counter} <button className="button--small" onClick={handleClick}>increase</button>
        </div>
        <div>
            {xcounter} <button className="button--small" onClick={handlexClick}>increase</button>
        </div>
    </div>
  )
}

export default UseEffect