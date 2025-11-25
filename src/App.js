import { useEffect, useState } from "react";
import "./App.css";
import Carta from "./pages/Carta";

function App() {
  const [carrito, setCarrito] = useState([]);
  const añadirAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const existente= prevCarrito.find(item => item.id === producto.id);
      if (existente) {
        return prevCarrito.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  return <Carta />;

}

export default App;
