import { BrowserRouter, Routes, Route } from "react-router-dom";

// RUTAS CAMARERO

import Carta from "./pages/cliente/CartaCliente";


function App() {
  return (
    <BrowserRouter>
      <Routes>



      <Route path="/" element={<Carta />} />
       

        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
