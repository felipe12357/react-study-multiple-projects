
import {React,useState } from 'react'
import { formatPrice } from '../utils/format-price';

const FormRange = ({label,defaultValue,min,max,step,inputSize}) => {
    const [currentRange,setRange] = useState(defaultValue);
  return (
    <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">{label}</span>
            <span className="label-text-alt">{formatPrice(currentRange)}</span>
        </div>
        <input name="range" type="range" min={min} max={max} value={currentRange} step={step}
            className={`range range-primary ${(inputSize) && inputSize}`} 
            onChange={(e)=>setRange(parseInt(e.target.value))} />
        <div className="label">
            <span className="label-text-alt">$0</span>
            <span className="label-text-alt">Max: {formatPrice(max)}</span>
        </div>
    </label>
  )
}

export default FormRange