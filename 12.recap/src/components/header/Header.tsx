
import './header.scss';
import { UseAppContext } from '../../GlobalContext';
import { useNavigate } from 'react-router-dom';


export const HeaderComponent =()=>{
    const navigate = useNavigate();
    const {user} = UseAppContext();
    return (
        <div className='header'>
           <img src="/src/assets/logo-copa-america.png" onClick={()=> navigate("/")}/>
           <div>
                { 
                    (user.username) ?  
                    `Bienvenido, test user ${user.username}` :
                    <a href="/login">Ingresar</a>
                }
           </div>
        </div>
    )
}