import { useState } from 'react'
import PropTypes from 'prop-types';
const Form = ({generateHandle}) => {

    const [color,setColor]=useState('');

  return (
    <div className='form-color '>
        <input className="form-input" type="color" value={color} onChange={(e)=>setColor(e.target.value)}></input>
        <input className="form-input" type="text" value={color}  onChange={(e)=>setColor(e.target.value)}></input>
        <button style={{backgroundColor:color,color:'white'}} className='button--small' onClick={()=>generateHandle(color)}>Generate</button>
    </div>

  )
}
Form.propTypes = {
    generateHandle:PropTypes.func
};
export default Form