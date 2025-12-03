import React,{ useState } from "react";

export default function AdminProductos(){


const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [foto, setFoto] = useState(null);
  const [mensaje, setMensaje] = useState("");



const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foto) {
      setMensaje("Selecciona una imagen.");
      return;
    }

    setMensaje("Subiendo imagen...");

    // 1. SUBIR FOTO A CLOUDINARY A TRAVÉS DE TU BACKEND
    const resUpload = await fetch("https://backend-carta.vercel.app/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": foto.type,
      },
      body: foto,
    });

    const dataUpload = await resUpload.json();

    if (!dataUpload.url) {
      setMensaje("Error subiendo imagen. Revisa /api/upload");
      return;
    }

    const imageUrl = dataUpload.url;

    setMensaje("Imagen subida, creando producto...");

    // 2. ENVIAR PRODUCTO AL BACKEND (Render DB)
    const res = await fetch(
      "https://backend-carta.vercel.app/api/productos-create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          precio,
          categoria,
          imagen: imageUrl,
          subcategoria,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setMensaje("✅ Producto creado correctamente");
      setNombre("");
      setPrecio("");
      setCategoria("");
      setSubcategoria("");
      setFoto(null);
    } else {
      setMensaje("❌ Error al crear producto: " + data.error);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h2>Panel de Administración de Productos</h2>

      <form onSubmit={handleSubmit}>

        <label>Nombre del producto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Precio (€)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <label>Categoría</label>
        <input
          type="text"
          placeholder="hamburguesas, bebidas, tapas..."
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />

        <label>Subcategoría (opcional)</label>
        <input
          type="text"
          placeholder="premium, combo, vegano..."
          value={subcategoria}
          onChange={(e) => setSubcategoria(e.target.value)}
        />

        <label>Foto del producto</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFoto(e.target.files[0])}
          required
        />

        <button type="submit" style={{ marginTop: 20 }}>
          Crear producto
        </button>
      </form>

      {mensaje && <p style={{ marginTop: 20 }}>{mensaje}</p>}
    </div>
  );
}







