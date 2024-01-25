import React from 'react'

const FormSelect = ({optionList,label,inputSize}) => {
  return (
    <div className='form-control w-full max-w-xs"'>
        <div className="label">
            <span className="label-text  capitalize">{label}</span>
        </div>
        <select className={`select select-bordered max-w-xs capitalize ${(inputSize) && inputSize}`} name={label}>
            { optionList.map((option,index) => <option value={option} key={index}>{option}</option>) } 
        </select>
    </div>
  )
}

export default FormSelect