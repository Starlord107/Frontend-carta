import { useState, useEffect } from "react";
import HeaderCliente from "../../components/HeaderCliente";
import TabsCategoria from "../../components/TabsCategoria";
import ProductoCardCliente from "../../components/ProductoCardCliente";

  const categorias = {
    Bebidas: ["Cocteles", "Vinos", "Sangrias", "Tragos", "Refrescos", "Cervezas"],
    Comidas: ["Hamburguesas", "Tapas", "Bocadillos", "Platos", "Postres"],
  };

function Carta() {
  const [productos, setProductos] = useState([]);


  const [categoriaPrincipal, setCategoriaPrincipal] = useState("Bebidas");
  const [categoriaSecundaria, setCategoriaSecundaria] = useState(categorias.Bebidas[0]);

  useEffect(() => {
    setCategoriaSecundaria(categorias[categoriaPrincipal][0]);
  }, [categoriaPrincipal]);

  useEffect(() => {
    fetch("http://localhost:4000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        const productosConSubcategoria = data.map((p) => {
          if (p.subcategoria) return p;

          if (p.imagen?.includes("Bocadillos")) return { ...p, subcategoria: "Bocadillos" };
          if (p.imagen?.includes("Hamburguesas")) return { ...p, subcategoria: "Hamburguesas" };
          if (p.imagen?.includes("Tapas")) return { ...p, subcategoria: "Tapas" };
          if (p.imagen?.includes("Platos")) return { ...p, subcategoria: "Platos" };
          if (p.imagen?.includes("Postres")) return { ...p, subcategoria: "Postres" };

          if (p.imagen?.includes("Cocteles")) return { ...p, subcategoria: "Cocteles" };
          if (p.imagen?.includes("Vinos")) return { ...p, subcategoria: "Vinos" };
          if (p.imagen?.includes("Sangrias")) return { ...p, subcategoria: "Sangrias" };
          if (p.imagen?.includes("Refrescos")) return { ...p, subcategoria: "Refrescos" };
          if (p.imagen?.includes("Tragos")) return { ...p, subcategoria: "Tragos" };
          if (p.imagen?.includes("Cervezas")) return { ...p, subcategoria: "Cervezas" };

          return p;
        });

        setProductos(productosConSubcategoria);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      });
  }, []);

  const productosFiltrados = productos.filter(
    (p) =>
      p.categoria === categoriaPrincipal &&
      p.subcategoria === categoriaSecundaria
  );

  return (
    <div className="w-full min-h-screen bg-[#f4f7fb] flex flex-col">
      <HeaderCliente />

      <main className="w-full max-w-screen-sm mx-auto px-3">
        <TabsCategoria
          categoriaPrincipal={categoriaPrincipal}
          setCategoriaPrincipal={setCategoriaPrincipal}
          categoriaSecundaria={categoriaSecundaria}
          setCategoriaSecundaria={setCategoriaSecundaria}
        />
      </main>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {productosFiltrados.map((p) => (
          <ProductoCardCliente
            key={p.id}
            producto={p}
            categoriaSecundaria={categoriaSecundaria}
          />
        ))}
      </div>
    </div>
  );
}

export default Carta;