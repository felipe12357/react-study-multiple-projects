import {Fragment,useState} from 'react'
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import './color.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'
const ColorGenerator = () => {

    const [colorListValues,setColorList] = useState([]);

    const generateHandle=(color)=>{
        try{
            setColorList(new Values(color).all(10).map(color => ({hex:`#${color.hex}`, weight:color.weight}) ));
            toast.success('new colors generated');
        }catch(error){
            toast.error(error.message);
        }
        
    }

  return (
    <Fragment>
        <ToastContainer position='top-center'></ToastContainer>
        <Form generateHandle={generateHandle}></Form>
       { colorListValues.length>0 && <ColorList colorList={colorListValues}></ColorList> } 
    </Fragment>
   
  )
}

export default ColorGenerator