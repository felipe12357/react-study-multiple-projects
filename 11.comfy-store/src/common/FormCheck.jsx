import React from 'react'

const FormCheck = ({label,name,inputSize}) => {
  return (
    <div className="form-control align-middle ">
        <label className="label cursor-pointer">
            <div className="label-text capitalize">{label}</div> 
            <input type="checkbox" className={`checkbox checkbox-primary ${(inputSize) && inputSize}`} name={name}/>
        </label>
    </div>
  )
}

export default FormCheck