
import './App.css'
import CarContainer from './components/CartContainer'
import NavBar from './components/Navbar'
import Modal from './components/Modal';
import { useSelector } from 'react-redux';
import LoadingModal from './components/LoadingModal';

function App() {
  const { showModal } = useSelector((store)=>store.modal);
  const { isLoading } = useSelector((store)=>store.cart);
  return (
    <>
      { (isLoading) && <LoadingModal></LoadingModal>}
      { (showModal) && <Modal></Modal> }
      <NavBar></NavBar>
      <CarContainer></CarContainer>
    </>
  )
}

export default App
