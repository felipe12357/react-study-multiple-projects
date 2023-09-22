export const FormExample = ()=>{
    const handleNameInput = (element)=>{
        console.log('change',element.target.value)
    }
    const handleFormClick = (e) =>{
      //  e.preventDefault()
        console.log('handle click');
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log('submit');
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Form</h2>
                <input type = "text" name= "name" placeholder="name" onChange={(val)=>handleNameInput(val)}></input>
                {/**  de esta forma  NO submitea el formulario*/}
                <button onClick={(e)=>handleFormClick(e)} type="button">Send</button>
               {/*  recordar q si No se le coloca el type o si se coloca type submit es lo mismo y submitea */}
                <button onClick={(e)=>handleFormClick(e)} type="submit">Submit</button>
            </form>
        </section>
    )
}