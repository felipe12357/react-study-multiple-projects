
import { useReducer,Fragment } from 'react';
import {nombres} from '../data';


const defaultState = {
    people:nombres
}

const ACTION_TYPES_ENUM = {
    REMOVE:"REMOVE",
    RESET:"RESET",
    CLEAR:"CLEAR"
}


const reducer = (state,action)=>{
    console.log(action);
    console.log(action.type);
    switch(action.type){
        case ACTION_TYPES_ENUM.REMOVE:{
            const newList = state.people.filter(person => person.id !==action.payload.id);
            return {...state,people:newList}
        }
        case ACTION_TYPES_ENUM.RESET:
            return {...state,people:nombres}
        case ACTION_TYPES_ENUM.CLEAR:
            return {...state,people:[]}
        default:
            return state;
    }

}


const UseReducerBasics = () => {

    const [state,dispatch] = useReducer(reducer,defaultState);

    const removeItem = (id) => {
        dispatch({type:ACTION_TYPES_ENUM.REMOVE,payload:{id}})
    }

    const clearList = () =>{
        dispatch({type:ACTION_TYPES_ENUM.CLEAR})
    }

    const reset =() =>{
        dispatch({type:ACTION_TYPES_ENUM.RESET})
    }

  return (
    <Fragment>
        <div>Use Reducer Example</div>
            <ul>
                {   state.people.map(({name,id})=>
                    <li key={id}>  
                        {name} - 
                        <button className="button--small" onClick={()=>removeItem(id)}>Eliminar</button>
                    </li>)
                }
            </ul>
        <div>
           {(state.people.length > 0) ? <button onClick={clearList}>Eliminar todos</button> : <button onClick={reset}>Reset</button>}
        </div>
    </Fragment>
  )
}

export default UseReducerBasics