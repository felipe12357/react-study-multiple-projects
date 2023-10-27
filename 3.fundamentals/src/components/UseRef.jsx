import { Fragment,useRef } from 'react'

const UseRef = () => {

    const refContainer = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        //getELementByID tiene q hacerse adentro del metodo de lo contrario saca error,
        //a diferencia de useRef
        const domContainer = document.getElementById('name');
        console.log(domContainer,domContainer.value)
        console.log(refContainer.current,refContainer.current.value);
    }

  return (
    <Fragment>
        <h2>UseRef</h2>
        Trabaja igual q getElementById, la diferencia es q permite guardar la referencia del elemento,
        apesar q la vista se vuelva a renderizar
        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <h2 className='form-title'>Use Ref</h2>
            <div className="form-row">
                <label htmlFor="name" className="form-label">name</label>
                <input type="text" className='form-input' id="name" ref={refContainer}/>
            </div>
            <button className="btn btn-block" >Submit</button>
        </form>
    </Fragment>
  )
}

export default UseRef