
import './App.css'
import Birthday from './1.Birthday/Birthday';
import Tours from './2.Tours/tours';
import Lorem from './3.lorem_paragrafs/lorem';
import ColorGenerator from './4.color_generator/ColorGenerator';
import GroceryBud from './5.Grocery_Bud/GroceryBud';
import Navbar from './6.Navbar/Navbar';
import SideBarModal from './7.SideBarModal/SideBarModal';
import {ContextGlobalProvider} from './7.SideBarModal/ContextGlobalProvider';
import  ContextAPINotGlobalProvider  from './8.SideBarModalNotGlobalContext/ContextAPINotGlobalProvider';
import { useState } from 'react'
function App() {
  const [currentView,setCurrentView] = useState(0);
  return (
    <main className='app-main'> 
      <div className='app-menu'>
        <div className="app-element" onClick={()=>setCurrentView('Birthday')}>1. Birthday - UseStage inputs properties</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('Tours')}>2. Tours - UseEffect</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('Lorem')}>3. Lorem - forms</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('ColorGenerator')}>4. ColorGenerator - forms, toast library</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('GroceryBud')}>5. GroceryBud - forms, prototypes</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('Navbar')}>6. Navbar - useRef</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('ContextGlobalProvider')}>7. ContextProvider - createContext as child content</div>
        <hr></hr>
        <div className="app-element" onClick={()=>setCurrentView('ContextAPINotGlobalProvider')}>8. ContextProvider</div>
      </div>
      <div className='app-container'>
        {currentView ==='Birthday' &&<Birthday></Birthday> }
        {currentView ==='Tours' &&<Tours></Tours> }
        {currentView ==='Lorem' &&<Lorem></Lorem> }
        {currentView ==='ColorGenerator' &&<ColorGenerator></ColorGenerator> }
        {currentView ==='GroceryBud' &&<GroceryBud></GroceryBud> }
        {currentView ==='Navbar' &&<Navbar></Navbar> }
        {currentView ==='ContextGlobalProvider' && 
        <ContextGlobalProvider >
          <SideBarModal></SideBarModal>
        </ContextGlobalProvider> }
        {currentView ==='ContextAPINotGlobalProvider' &&<ContextAPINotGlobalProvider></ContextAPINotGlobalProvider> }
      </div>
    </main>
  )
}
export default App
