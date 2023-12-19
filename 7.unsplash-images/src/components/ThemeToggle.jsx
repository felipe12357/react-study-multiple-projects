import React, { useEffect } from 'react'
import { useAppGlobalContext } from '../GlobalContext';
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs';
const ThemeToggle = () => {
  const {isDarkTheme,setIsDarkTheme} = useAppGlobalContext();

  const updateTheme = (value)=>{
      localStorage.setItem('isDarkTheme',value);
      setIsDarkTheme(value);
  }

  useEffect(()=>{
    let lastValue = false;
    if(localStorage.getItem('isDarkTheme')){
      const myBool = (localStorage.getItem('isDarkTheme').toLowerCase() === 'true');
      lastValue = myBool
    }
    setIsDarkTheme(lastValue);
  },[])

  return (
    <div className='theme-toogle'>
      {
        (isDarkTheme) ? <BsFillMoonFill color='white'  className='icon' onClick={()=>updateTheme(false)}/>
         : <BsFillSunFill color='var(--primary-500)' className='icon'  onClick={()=>updateTheme(true)} />
      }
    </div>
  )
}

export default ThemeToggle