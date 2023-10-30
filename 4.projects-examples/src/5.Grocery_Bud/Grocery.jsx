import PropTypes from 'prop-types';

export const Grocery = ({id,value,completed,removeItem,updateItem}) => {

   return (
        <div className='grocery-item'>
            <input type='checkbox' id={id} name={value} 
                    onChange={()=>updateItem(id,!completed)}
                    checked={completed}
                    >
            </input> 
            <span className={completed ? 'checked':null} >{value}</span>
            <span>
                <button type="button" className='button--small button--delete' onClick={()=>removeItem(id)}>
                    Delete
                </button>
            </span>
        </div>
   ) 
}

export const GroceryPropotypes = {
    value:PropTypes.string,
    id:PropTypes.string,
    completed:PropTypes.bool,
    removeItem:PropTypes.func,
    updateItem:PropTypes.func
};

Grocery.propTypes = GroceryPropotypes;