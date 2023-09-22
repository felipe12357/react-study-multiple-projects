import React from 'react'
import './game.css'

const Game  = (props) => {
    
    const {imgUrl,name,platform,children,getGameListFunction} = props; //utilizo destructuring (tambien se peude hacer la destructuracion al inicio de la funcion: const Game  = ({imgUrl,name,platform}) )
    const clickHandler = ()=>{
        console.log('click',props.name);
        getGameListFunction(props.name); //ejemplo de invocar una funcion del componente padre
    }
    return (
        <article className="game" 
            onClick={clickHandler}
            /** otra alternativa */
           /*   onClick={()=>getGameListFunction(name)}  */
            >  
            {/*  para usar variables en el html es con {} */}
            {children} {/* se utiliza la variable children para mostrar el contenido q se envia entre tags (el equivalente a content child de angular)*/}
            <img src={imgUrl} alt={props.name}/> {/*gracias a la destructuracion no es necesario escribir: "props.imgUrl" */}
            <h2>{name}</h2>
            <h4>{platform}</h4>
        </article>
    )
}

export default Game