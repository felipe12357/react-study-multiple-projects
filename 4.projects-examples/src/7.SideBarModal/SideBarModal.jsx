import Home from './Home';
import SideBar from './SideBar';
import Modal from './Modal';
import '../side-bar-modal.css';

const SideBarModal = () => {
 // const {isSideBarOpen,setSideBarState,isModalOpen,setModalState} = useContextAPIGlobal(); //De esta forma utilizo el hook customizado q en este caso lo unico q ahorra es el import de 2 lineas de código
  return (
    <main className='sideBarProject'>
        <p> Componente que muestra la utilizacion de un contexto Global, la principal diferencia es q utiliza la propiedad children para facilitar su 
        implementacion.</p>
        <Modal></Modal>
        <Home></Home>
        <SideBar></SideBar>
    </main>
  )
}

export default SideBarModal