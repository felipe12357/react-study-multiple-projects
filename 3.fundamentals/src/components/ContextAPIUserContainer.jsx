
import { NavBarContext } from './ContextAPINavbar';
import { useContext } from 'react';
const ContextAPIUserContainer = () => {
    const {user,logHandle} = useContext(NavBarContext);
   
    return (
        <div className='user-container'>
            {user ? 
                    <div>
                        Hello There, {user?.name?.toUpperCase()}
                        <button className='btn  button--small' onClick={logHandle}>logout</button>
                    </div>
                :   <div>
                        Please Login  <button className='btn button--small' onClick={logHandle}>log in</button>
                    </div>        
            }
        </div>
    )
}

export default ContextAPIUserContainer