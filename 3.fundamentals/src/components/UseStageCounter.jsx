
import { Fragment,useState } from "react";

const UseStageCounter = () => {

    //useState() returns an array with two elements: the current state value, and a function that we can use to update the state
    //count es el valor actual de la vista, countHandler la funcion encargada de actualizarla , 0 vendria siendo el valor inicial
    let [count, countHandler] = useState(0);
    const nombresList = ['Andres','Natalia Pulgarín', 'Sara Zuleta', 'Elizabeth Angel', 'Valentina Roldán'];

    //para el siguiente ejemplo:
    // currentNombre es el valor inicial de la vista , nombresHandler la funcion q debo invocar para actualizaro, setteo el valor inicial con 'Andres'
    let [currentNombre,nombresHandler] = useState(nombresList[0])

    const handleClick = ()=>{ 
        count ++;
        if(count ===5)
            count =0;

        currentNombre =nombresList[count];
        //ACTUALIZO LA VISTA
        countHandler(count)
        nombresHandler(currentNombre);
    }
    
   return (
        <Fragment>
            <div> 
                <h3>Use Stage:</h3>
                Ejemplo 1, contador q incrementa al hacer click, segun el numero muestra un nombre de una lista<br></br>
                {currentNombre} - {count}
            </div>
            <button onClick={handleClick}> click</button>
        </Fragment>
    ) 
}

export default UseStageCounter