import React, { useState,memo,useCallback } from 'react'
import {nombres} from '../data'
export const MemoPerformance = () => {
  return (
    <div style={{textAlign:"justify"}}>
        <h2>Memo Function</h2>
        <div>No confundir con la el hook memo, esta es la funcion de react y se utiliza para q react identifique cuando los parametros de entrada 
        de un componente cambian y asi renderizar solo cuando es necesario
        
        </div>
        <p>en el siguiente ejemplo se usa en el componente q lista los nombres.<br></br>
            cuando un component padre se renderiza tambien lo hacen sus hijos, aca evitamos ese comportamiento
            utilizando la funcion memo
        </p>
        <p>Otro punto a resaltar es q las funciones q se definen en un componente se vuelven a generar cada vez q ese se renderiza
            haciendo q sus hijos asu vez se vuelvan a renderizar: en el ejemplo la funcion: removePerson, se vuelve a generar cada vez
            q se da click en el boton: count
        </p>
        <p>para evadir este comportameinto utilizamos useCallback</p>
        <LowerState></LowerState>
    </div>

  )
}


const LowerState =()=>{
    const [people,setPeople] = useState(nombres);
    const [count, setCount] = useState(0);

    const removePerson =useCallback((id)=>{
        const newPeople = people.filter(person => person.id !==id)
        setPeople(newPeople);
    },[people]) //=>el segundo argumento es un array en el cual incluyo las variables q debe tener encuenta para volver a renderizar

    return (
        <section>
            <button className='btn' style={{marginBottom:'1rem'}} 
                    onClick={()=>setCount(count+1)}>
                count: {count}
            </button>
            <ListPeople people={people} removePerson={removePerson}></ListPeople>
        </section>
    )
}

export const ListPeople = memo(({people,removePerson}) =>{
    return people.map((person)=>
        <div key={person.id}>
         {person.name} -<button className='button--small' onClick={()=>removePerson(person.id)}>delete</button> 
        </div>)
})







