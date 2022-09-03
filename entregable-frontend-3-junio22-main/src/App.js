import Cabecera from "./components/Cabecera"
import Listado from "./components/Listado"
import { useState } from "react";

function App() {
  const {comprar, setComprar} = useState(0);
  
  const aumentarCant = () => {
    setComprar(comprar + 1);
  }
  

  return (
    <div className="App">
      <Cabecera comprar= {comprar}/>
      <Listado aumentarCant={aumentarCant}/>
    </div>
  );
}

export default App;
