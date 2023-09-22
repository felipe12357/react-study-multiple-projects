/* 
rafce (arrow func with export)
rfce (regular func with export ) */

import React, { Fragment } from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
/* importante descatacar q para este componente se utilizo el export default */
import GameList from "./components/gamelist/GameList";
/* mientras q para este se utilizo un export  */
import {FormExample} from "./components/formexample/FormExample";

//La funcion siempre debe devolver un solo elemento
/* function Greeting(){
    return <h2>Hello World</h2>
}
 */
 




const MainApp =()=>{
   // const getSelectGameFunction =(game)=> console.log('desde main',game);

    //aca estoy enviando 2 elementos por lo cual saca error:
    //return <FormExample/> <GameList />

    //Usamos un fragement en estos escenarios
    return <Fragment>
                <FormExample/>
                <GameList />
            </Fragment>
} 


const root = ReactDOM.createRoot(document.getElementById('root'));
//aca se coloca cual es el componente q renderiza toda la aplicacion
root.render(<MainApp />);

