
import PropTypes from 'prop-types';
import {Grocery,GroceryPropotypes} from './Grocery';
const GroceriesList = ({groceriesList,removeItem,updateItem}) => {
  return (
    <div> { groceriesList.map(grocery =><Grocery key={grocery.id} {...grocery} removeItem={removeItem} updateItem={updateItem} ></Grocery>) } </div>   
  )
}

GroceriesList.propTypes = {
    groceriesList: PropTypes.arrayOf(PropTypes.shape(GroceryPropotypes)),
    removeItem:PropTypes.func,
    updateItem:PropTypes.func
};
export default GroceriesList

