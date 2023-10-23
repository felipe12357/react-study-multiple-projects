
import { useState, Fragment } from 'react';
import FormsUserList from './FormsUserList';

import './common.css';
const Forms = () => {
  const [name,setName] = useState('Felipe');
  const [email,setEmail] = useState('a@a.com');
  const [userList,setUsers] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(name && email){
      userList.push({name,email});
      setUsers(userList);
      setName('');
      setEmail('');
    }
  }

  const deleteUserHandler = (name) =>{
    const newList = userList.filter(user => user.name !== name);
    setUsers(newList)
  }

  return (
    <Fragment>
      <form className='form' onSubmit={handleSubmit}>
          <h2 className='form-title'>Controlled inputs</h2>
          <div className="form-row">
              <label htmlFor="name" className="form-label">name</label>
              <input type="text" className='form-input' id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
          </div>
          <div className="form-row">
              <label htmlFor="email" className="form-label">email</label>
              <input type="email" className='form-input' id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>
          <button className="btn btn-block" >Submit</button>
      </form>
      {  userList.length>0 && <FormsUserList userList={userList} deleteUser={deleteUserHandler}></FormsUserList>}
    </Fragment>

  )
}

export default Forms