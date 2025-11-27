import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeleccionarMesa from "./pages/SeleccionarMesa";
import Carta from "./pages/Carta";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Pantalla inicial: seleccionar mesa */}
        <Route path="/" element={<SeleccionarMesa />} />

        {/* Pantalla de carta, recibe mesaId */}
        <Route path="/carta/:mesaId" element={<Carta />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
