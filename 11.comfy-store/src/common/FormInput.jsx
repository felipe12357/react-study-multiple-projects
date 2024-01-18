import React from 'react'

const FormInput = ({type,name,label,defaultValue}) => {
  return (
    <div className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <input name={name} type={type} defaultValue={defaultValue} className="input input-bordered w-full max-w-xs" />
    </div>
  )
}

export default FormInput