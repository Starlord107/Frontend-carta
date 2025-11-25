import { useState, useEffect } from "react";
import Header from "../components/Header";
import TabsCategoria from "../components/TabsCategoria";
import ProductoCard from "../components/ProductoCard";
import CarritoDrawer from "../components/CarritoDrawer";
import ModalPedidoEnviado from "../components/ModalPedidoEnviado";

function Carta() {
  const [productos, setProductos] = useState([]);
  const [categoriaPrincipal, setCategoriaPrincipal] = useState("Bebidas");
  const [categoriaSecundaria, setCategoriaSecundaria] = useState("");

  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [pedidoModalOpen, setPedidoModalOpen] = useState(false);

  useEffect(() => {
  fetch("http://localhost:4000/api/productos")
    .then(res => res.json())
    .then(data => {

      const productosConSubcategoria = data.map(p => {
        if (p.subcategoria) return p; // Si ya tiene subcategoria, la dejamos

        // Determinar subcategoría según la ruta de imagen
        if (p.imagen.includes("Bocadillos")) return { ...p, subcategoria: "Bocadillos" };
        if (p.imagen.includes("Hamburguesas")) return { ...p, subcategoria: "Hamburguesas" };
        if (p.imagen.includes("Tapas")) return { ...p, subcategoria: "Tapas" };
        if (p.imagen.includes("Platos")) return { ...p, subcategoria: "Platos" };

        if (p.imagen.includes("Cocteles")) return { ...p, subcategoria: "Cocteles" };
        if (p.imagen.includes("Vinos")) return { ...p, subcategoria: "Vinos" };
        if (p.imagen.includes("Sangrias")) return { ...p, subcategoria: "Sangrias" };
        if (p.imagen.includes("Refrescos")) return { ...p, subcategoria: "Refrescos" };
        if (p.imagen.includes("Tragos")) return { ...p, subcategoria: "Tragos" };

        return p; // Si no coincidió nada
      });

      setProductos(productosConSubcategoria);
    });
}, []);



  

  const añadirAlCarrito = (producto, cantidadElegida) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id && p.formato === producto.formato);
      if (existe) {
        return prev.map(p =>
          p.id === producto.id && p.formato === producto.formato
            ? { ...p, cantidad: p.cantidad + cantidadElegida,
              precio_total: (p.cantidad + cantidadElegida) * p.precio
             }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: cantidadElegida, precio_total: cantidadElegida * producto.precio }];
    });
  };

  const aumentarCantidad = id => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = id => {
    setCarrito(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, cantidad: Math.max(0, item.cantidad - 1) }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const eliminarProducto = id => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  // Filtrar productos por categorías
  const productosFiltrados = productos.filter(
    p =>
      p.categoria === categoriaPrincipal &&
      (categoriaSecundaria === "" ||
        p.subcategoria === categoriaSecundaria)
  );


  return (
    <div className="w-full min-h-screen bg-[#f4f7fb] flex flex-col">

      <Header
        abrirCarrito={() => setCarritoVisible(true)}
        carritoCount={carrito.reduce((acc, item) => acc + item.cantidad, 0)}
      />
      <main className="w-full max-w-screen-sm mx-auto px-3">
      <TabsCategoria
        categoriaPrincipal={categoriaPrincipal}
        setCategoriaPrincipal={setCategoriaPrincipal}
        categoriaSecundaria={categoriaSecundaria}
        setCategoriaSecundaria={setCategoriaSecundaria}
      />
      </main>

      {/* Mostrar productos solo si hay subcategoría */}
      {categoriaSecundaria !== "" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {productosFiltrados.map(p => (
            <ProductoCard
              key={p.id}
              producto={p}
              añadirAlCarrito={añadirAlCarrito}
            />
          ))}
        </div>
      )}

      <CarritoDrawer
        abierto={carritoVisible}
        cerrar={() => setCarritoVisible(false)}
        carrito={carrito}
        enviarPedido={() => {
          console.log("Pedido enviado:", carrito);
          setCarritoVisible(false);
          setTimeout(() => {
            setCarrito([]);
            setPedidoModalOpen(true);
          }, 350);
        }}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarProducto={eliminarProducto}
      />
      <ModalPedidoEnviado
        abierto={pedidoModalOpen}
        cerrar={() => setPedidoModalOpen(false)}
      />
    </div>
    
  );
}

export default Carta;
