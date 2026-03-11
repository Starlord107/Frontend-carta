import { BrowserRouter, Routes, Route } from "react-router-dom";

// RUTAS CAMARERO
import { Navigate } from "react-router-dom";      

import Carta from "./pages/cliente/CartaCliente";


function App() {
  return (
    <BrowserRouter>
      <Routes>



      <Route path="/cliente/CartaCliente" element={<Carta />} />
       

        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
