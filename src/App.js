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
        <Route
          path="/camarero/AdminProductos"
          element={
      <AdminProductos />
   }
          />

        {/* CLIENTE */}
                <Route path="/cliente/carta" element={<CartaCliente />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
