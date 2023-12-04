import logo from '../assets/logo.svg';
import {social,links} from '../data';
import { FaTimes } from 'react-icons/fa';
import {ContextNormal} from './ContextAPINotGlobalProvider';
import { useContext } from 'react';
const SideBarNotGlobalContext = () => {
  const {isSideBarOpen,setSideBarState} = useContext(ContextNormal);
  return (
    <aside className={isSideBarOpen ? 'sidebar show-element' : 'sidebar'} >
      <div className='sidebar-header'>
        <img src={logo} alt="logo" className='logo'></img>
        <button className='close-modal-btn' onClick={()=> setSideBarState(false)}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className='links'>
        {links.map(({id,url,icon,text})=>{
          return (<li key={id}><a href={url}> {icon} {text}</a></li>)
                            
        })}
      </ul>
      <ul className='social-links'>
        {social.map(({id,url,icon})=>{
          return (<li key={id}><a href={url}>{icon}</a></li>)
        })}
      </ul>
    </aside>
  )
}

export default SideBarNotGlobalContext