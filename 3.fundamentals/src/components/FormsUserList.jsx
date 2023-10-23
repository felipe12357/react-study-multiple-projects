
import PropTypes from 'prop-types';
const FormsUserList = ({userList, deleteUser}) => {

  return (
    <div>
    <h3>User List</h3>
      {userList.map((user,index)=>
        <li key={index}>{user.name} - {user.email} 
            <button className="btn button--small button--red" onClick={()=>deleteUser(user.name)}>Delete X</button>
        </li>)}
    </div>
  )
}

const User = PropTypes.shape({
    name:PropTypes.string,
    email:PropTypes.string,
})

FormsUserList.propTypes = {
    userList: PropTypes.arrayOf(User),
    deleteUser:PropTypes.func
};


export default FormsUserList