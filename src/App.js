import { BrowserRouter, Routes, Route } from "react-router-dom";

// RUTAS CAMARERO
import SeleccionarMesa from "./pages/camarero/SeleccionarMesa";
import Carta from "./pages/camarero/Carta";
import LoginCamarero from "./pages/camarero/LoginCamarero";

// RUTA CLIENTE
import CartaCliente from "./pages/cliente/CartaCliente";

// PROTECCIÓN DE RUTAS
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/cliente/carta" replace/>}/>

        {/* LOGIN CAMARERO */}
        <Route path="/camarero/login" element={<LoginCamarero />} />

        {/* RUTAS PROTEGIDAS CAMARERO */}
        <Route
          path="/camarero/mesa"
          element={
            <PrivateRoute>
              <SeleccionarMesa />
            </PrivateRoute>
          }
        />

        <Route
          path="/camarero/carta/:mesaId"
          element={
            <PrivateRoute>
              <Carta />
            </PrivateRoute>
          }
        />

        {/* CLIENTE */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
