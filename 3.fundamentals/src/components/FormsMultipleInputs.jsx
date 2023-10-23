import { useState, Fragment } from 'react';

export const FormsMultipleInputs = () => {

    const optionList = ['','Elizabeth','Jhoana','Erica','Valentina'];
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        allow:false,
        girl:''
    })

    const handleChange = (e)=>{
        if(e.target.type !=="checkbox")
            setUser({...user,[e.target.name]:e.target.value});

        if(e.target.type ==="checkbox")
            setUser({...user,[e.target.name]:e.target.checked});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(user);
    }

  return (
    <Fragment>
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form-title'>Multiple inputs handling</h2>
            <div className="form-row">
                <label htmlFor="name" className="form-label" >name</label>
                <input type="text" name="name" className='form-input' id="name" onChange={(e)=>handleChange(e)} value={user.name}/>
            </div>
            <div className="form-row">
                <label htmlFor="girl" className="form-label">girl</label>
                <select name="girl" id="girl" className='form-input' value={user.girl}  onChange={e=>handleChange(e)}>
                    {optionList.map(girl => <option key={girl}>{girl}</option>)}
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label" >email</label>
                <input type="email" name="email" className='form-input' id="email" onChange={(e)=>handleChange(e)} value={user.email}/>
            </div>
            <div className="form-row">
                <label htmlFor="password" className="form-label">password</label>
                <input name="password" type="password" className='form-input' id="password" onChange={(e)=>handleChange(e)} value={user.password}/>
            </div>
            <div className="form-row">
                <label htmlFor="allow" className="form-label-check">Allow terms and conditions</label>
                <input name="allow" type="checkbox" className='form-check' id="allow" onChange={(e)=>handleChange(e)} value={user.allow}/>
            </div>
            <button className="btn btn-block" >Submit</button>
        </form>
    </Fragment>
  )
}
