import {FaTimes} from 'react-icons/fa';
import { useContextAPIGlobal } from './ContextGlobalProvider';
const Modal = () => {
  const {isModalOpen,setModalState} = useContextAPIGlobal();
  return (
    <div className={isModalOpen ? 'modal-overlay show-element' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={()=>setModalState(false)}>
          <FaTimes/>
        </button>
      </div>  
    </div>
  )
}

export default Modal