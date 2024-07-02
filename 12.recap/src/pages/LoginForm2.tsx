
import { useState,  } from 'react';
//muestro 2 formas adicionales de manejar forms:
//state
//formData
export const LoginForm = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        const formData = new FormData(event.target as HTMLFormElement);
        console.log(Object.entries(formData))
        console.log(formData.values())
        const user = formData.get('user') as string;
        const password = formData.get('password') as string;

        console.log(user,password);
    
    } 

    return (
        <>
            <h2>Polla Copa América 2024</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario {user}</label>
                    <input type="text" name="user" onChange={(e) => setUser(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña {password}</label>
                 {/*    <input type="password" name="password" onChange={(e) => handleChange(e)}/> */}
                 <input type="password" name="password" onChange={handleChange}/>
                </div>
                <button >Ingresar</button>
            </form>
        </>
    )
}