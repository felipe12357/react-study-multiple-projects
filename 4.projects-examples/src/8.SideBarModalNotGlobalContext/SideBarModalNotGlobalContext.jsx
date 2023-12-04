//este componente se utiza es para mirar la diferencia con el contexto global.. 
// tomando como ejemplo el utilizado en navbar 

import HomeNotGlobalContext from './HomeNotGlobalContext';
import ModalNotGlobalContext from './ModalNotGlobalContext';
import SideBarNotGlobalContext from './SideBarNotGlobalContext';
import '../side-bar-modal.css';
const SideBarModalNotGlobalContext = () => {
  return (
      <main className='sideBarProject'>
        <p> Componente que muestra la utilizacion de un contexto normal
        implementacion.</p>
        <HomeNotGlobalContext></HomeNotGlobalContext>
        <ModalNotGlobalContext></ModalNotGlobalContext>
        <SideBarNotGlobalContext></SideBarNotGlobalContext>
    </main> 
  )
}

export default SideBarModalNotGlobalContext