import { Fragment, useState } from "react";
import { nombres as nombresImportadosList } from '../data';

const UseStageDeleteElementsArray = () => {
        //LOGICA EJEMPLO 2
        let [people,setPeople] = useState(nombresImportadosList);

        const handleClickDelete1 = (position) =>{
            people.splice(position,1);
                //Actualizo la vista
                setPeople([...people]);
        }
    
        const handleClickDeleteAll = () =>{
            people = [];
            //Actualizo la vista
            setPeople(people);
        }

  return (
    <Fragment>
        <div>Ejemplo 2, se importa un array de nombres y se modifica segun el botón q se haga click</div>
            <ul>
                {   people.map(({name,id},position)=>
                    <li key={id}>  
                        {name} - 
                        <button className="button--small" onClick={()=>handleClickDelete1(position)}>Eliminar</button>
                    </li>)
                }
            </ul>
        <div>
            <button onClick={handleClickDeleteAll}>Eliminar todos</button>
        </div>
    </Fragment>
  )
}

export default UseStageDeleteElementsArray