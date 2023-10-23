import { useState, Fragment } from 'react';

export const FormWithFormData = () => {

    const optionList = ['','Elizabeth','Jhoana','Erica','Valentina'];
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        allow:false,
        girl:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        //lo puedo hacer cualquiera de las 2 formas
        /* console.log(e.currentTarget);
        console.log(document.getElementById('formTest')); */
        const formDataTest = new FormData(document.getElementById('formTest'));
        const formDataTest2 = new FormData(e.currentTarget);
        console.log([...formDataTest.entries()]);
        console.log(formDataTest.get('name'), formDataTest2.get('name'))
        const newUser = Object.fromEntries(formDataTest);
        console.log(newUser);
        e.currentTarget.reset();
    }
  return (
    <Fragment>
    <form className='form' onSubmit={handleSubmit} id="formTest">
        <h2 className='form-title'>Form Data Approach</h2>
        <div className="form-row">
            <label htmlFor="name" className="form-label" >name</label>
            <input type="text" name="name" className='form-input' id="name" />
        </div>
        <div className="form-row">
            <label htmlFor="girl" className="form-label">girl</label>
            <select name="girl" id="girl" className='form-input'   >
                {optionList.map(girl => <option key={girl}>{girl}</option>)}
            </select>
        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label" >email</label>
            <input type="email" name="email" className='form-input' id="email" />
        </div>
        <div className="form-row">
            <label htmlFor="password" className="form-label">password</label>
            <input name="password" type="password" className='form-input' id="password" />
        </div>
        <div className="form-row">
            <label htmlFor="allow" className="form-label-check">Allow terms and conditions</label>
            <input name="allow" type="checkbox" className='form-check' id="allow"  />
        </div>
        <button className="btn btn-block" >Submit</button>
    </form>
</Fragment>
  )
}
