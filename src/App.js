import { BrowserRouter, Routes, Route } from "react-router-dom";

// RUTAS CAMARERO
import { Navigate } from "react-router-dom";


// RUTA CLIENTE
import CartaCliente from "./pages/cliente/CartaCliente";

// PROTECCIÓN DE RUTAS

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/cliente/carta" replace/>}/>

        {/* LOGIN CAMARERO */}

        {/* RUTAS PROTEGIDAS CAMARERO */}
       

        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
