import { useNavigate } from 'react-router-dom';
import { userLogin } from '../utils/Userlogin';
import { SyntheticEvent, useRef } from 'react';
import { UseAppContext } from '../GlobalContext';
export const LoginForm = () => {


    const user_input_ref = useRef<HTMLInputElement>(null);
    const password_input = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const {setUser} = UseAppContext();
    
    const handleSubmit = (event:SyntheticEvent) => {
        event.preventDefault();
        const userInputValue = user_input_ref.current?.value
        if(userInputValue){

            setUser({username:userInputValue, isAdmin:false})
            userLogin(user_input_ref.current?.value);
            navigate('/forecasts');
        }
    } 

    return (
        <>
            <h2>Polla Copa América 2024</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario</label>
                    <input type="text" ref={user_input_ref} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" ref={password_input}/>
                </div>
                <button >Ingresar</button>
            </form>
        </>
    )
}