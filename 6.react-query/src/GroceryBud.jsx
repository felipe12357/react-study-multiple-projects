
import GroceriesList from './GroceriesList';
import GroceryForm from './GroceryForm';
import './grocery.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GroceryBud = () => {
  return (
    <div className='overwritte-class centered'>
         <ToastContainer position='top-center'></ToastContainer>
         <GroceryForm ></GroceryForm>
         <GroceriesList></GroceriesList>
    </div>
  )
}

export default GroceryBud