import {FaTimes} from 'react-icons/fa';
import { useContext } from 'react';
import {ContextNormal} from './ContextAPINotGlobalProvider';
const ModalNotGlobalContext = () => {
  const {isModalOpen,setModalState} = useContext(ContextNormal);
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

export default ModalNotGlobalContext