import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import {ContextNormal} from './ContextAPINotGlobalProvider';

const HomeNotGlobalContext = () => {
  const {isSideBarOpen,setSideBarState,setModalState} = useContext(ContextNormal);
  
  return (
    <div className='home'>HomeNotGlobalContext
        <button className="btn--sidebar-toggle" onClick={()=>setSideBarState(!isSideBarOpen)}><FaBars></FaBars></button>
        <button className='btn' onClick={()=>setModalState(true)}>Show Modal</button>
    </div>
  )
}

export default HomeNotGlobalContext