
import { Fragment } from "react"
import { useState } from "react";

const VanillaCircuitEvaluation = () => {

    const [textName,setTexName] = useState('');

    const handleClick = ()=> {
        textName ? setTexName('') : setTexName('Felipe')
    }

  return (
    <Fragment>
        <div>VanillaCircuitEvaluation</div>
        
            {/*  {if(textName){ <h2>hola mundo</h2>}} //No funciona */}
            {/* Podria decirse que && es un shorcut de if sencillo
            mientras q || es un shortcuto de if else */}
            <div> Ejemplos :
              <ul>
                <li> con && Solo muestra el contenido si existe: { textName && <span>{textName}</span>} </li>
                <li> con || Si existe lo muestra si no un default: { textName || 'No hay nombre'} </li>
              </ul>
            </div>
            <button className="button--small" onClick={handleClick}>
              {textName ? 'Clear' : 'Set Name'}  
            </button>

    </Fragment>
  )
}

export default VanillaCircuitEvaluation