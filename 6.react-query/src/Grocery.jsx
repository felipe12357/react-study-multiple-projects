import PropTypes from 'prop-types';
import {UseDeleteReactQueryCustomHook,UseEditReactQueryCustomHook} from './ReactQueryCustomHooks';

export const Grocery = ({id,title,isDone}) => {     

    const updateTaskFn = UseEditReactQueryCustomHook('tasks')
    const deleteTaskFn = UseDeleteReactQueryCustomHook('tasks')

   return (
        <div className='grocery-item'>
            <input type='checkbox' id={id} name={title} 
                    onChange={()=>updateTaskFn({id,isDone:!isDone})}
                    checked={isDone} >
            </input> 
            <span className={isDone ? 'checked':null} >{title}</span>
            <span>
                <button type="button" className='button--small button--delete' onClick={()=>deleteTaskFn(id)}>
                    Delete
                </button>
            </span>
        </div>
   ) 
}

export const GroceryPropotypes = {
    title:PropTypes.string,
    id:PropTypes.string,
    isDone:PropTypes.bool
};

Grocery.propTypes = GroceryPropotypes;