import { FaBars } from 'react-icons/fa';
import { useContextAPIGlobal } from './ContextGlobalProvider';
const Home = () => {
  const {setSideBarState,setModalState} = useContextAPIGlobal();
  return (
    <div className='home'>Home
        <button className="btn--sidebar-toggle" onClick={()=>setSideBarState(true)}><FaBars></FaBars></button>
        <button className='btn' onClick={()=>setModalState(true)}>Show Modal</button>
    </div>
  )
}

export default Home