import { Fragment, useEffect, useState } from 'react'
import textArray from './data';
import { nanoid } from 'nanoid';

const Lorem = () => {
    const [count,setCount] = useState(1);
    const [textParagraph,setTextParagraph] = useState([])
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
        let textResult =textArray.slice(0,count);
        setTextParagraph(textResult);
    },[count])
  return (
    <Fragment>
    <div>lorem</div>
        <form className='form' onSubmit={handleSubmit}>
            <label className="form-label" htmlFor='amount'>Paragraphs</label>
            <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count}
             className='form-input'
             onChange={e=>setCount(e.target.value)}>
            </input>
        </form>
        <article>
            {textParagraph.map( (text) => <div key={nanoid()}><p>{text}</p><hr></hr></div> )}
        </article>
    </Fragment>

  )
}

export default Lorem