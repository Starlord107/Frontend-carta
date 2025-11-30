import { useState, useEffect, use } from "react";
import HeaderCliente from "../../components/HeaderCliente";
import TabsCategoria from "../../components/TabsCategoria";
import ProductoCard from "../../components/ProductoCard";
import ProductoCardCliente from "../../components/ProductoCardCliente";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
function CartaCliente() {
  const [productos, setProductos] = useState([]);
  const [categoriaPrincipal, setCategoriaPrincipal] = useState("Bebidas");
  const [categoriaSecundaria, setCategoriaSecundaria] = useState("");

  

  useEffect(() => {
fetch(`${API_URL}/api/productos`)
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



  

  


  

  

  // Filtrar productos por categorías
  const productosFiltrados = productos.filter(
    p =>
      p.categoria === categoriaPrincipal &&
      (categoriaSecundaria === "" ||
        p.subcategoria === categoriaSecundaria)
  );
  

  return (
    <div className="w-full min-h-screen bg-[#f4f7fb] flex flex-col">

      <HeaderCliente
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
            <ProductoCardCliente
              key={p.id}
              producto={p}
            />
          ))}
        </div>
      )}

      


      
    </div>
    
  );
}

export default CartaCliente;
