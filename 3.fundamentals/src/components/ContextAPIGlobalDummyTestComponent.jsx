import {UseContextAPIGlobal,ContextAPIGlobalContext} from './ContextAPIGlobalExample';
import { useContext } from "react";
function ContextAPIGlobalDummyTestComponent() {
    const {user1} = UseContextAPIGlobal(); //De esta forma utilizo el hook customizado q en este caso lo unico q ahorra es el import de 2 lineas de código
    const {user1:user1a} = useContext(ContextAPIGlobalContext);
  return (
    <div>ContextAPIGlobalDummyTestComponent {user1} - {user1a}</div>
  )
}

export default ContextAPIGlobalDummyTestComponent