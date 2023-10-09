import { Fragment, useState,useEffect } from "react"
export const VanillaCircuitEvaluationLogin = () => {

    const [user,setUser] = useState();

  return (
    <Fragment>
        <div>VanillaCircuitEvaluationLogin</div>
        <div>{user ? <UserComponent user={user} /> :'please login' }  </div>
        <button onClick={()=> user ? setUser(null) : setUser({name:'felipe'})}>
            {user ? 'Logout' : 'Login'}
        </button>
    </Fragment>
   
  )
}

const UserComponent = ({user})=>{
    useEffect(()=>{
      console.log('arranca');
      const testFunction = ()=>console.log('hola');
      const idInterval = setInterval(()=>console.log('interval'),3000);
      window.addEventListener('scroll',testFunction);
      
      return ()=>{
        clearInterval(idInterval);
        window.removeEventListener('scroll',testFunction)
        console.log('se destruye')
      }
    },[])

    return `Hello there ${user.name}`
}
