import { useState } from "react";

function ProductoCardCliente({producto}) {
  // Cantidad seleccionada
  // Si el producto tiene formatos
  const tieneFormatos = producto.formatos && producto.formatos.length > 0;

  // Formato actual seleccionado
  const [formatoActual, setFormatoActual] = useState(
    tieneFormatos ? producto.formatos[0] : null
  );
const precioFinal =tieneFormatos ?formatoActual.precio :producto.precio
  // Precio final a mostrar

  
console.log(producto);

 

  return (
    <div className="rounded-xl bg-white border border-[#1E40FF] shadow-[0_0_15px_rgba(46,107,255,0.3)] p-4 bg-cover bg-center"
    style={{
          backgroundImage: "url('/Fondos/azul.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
          overflow: "hidden"
      }}
    
    
    >
      {producto.imagen ? (
  <img
    src={producto.imagen}
    alt={producto.nombre}
className="w-full h-64 object-cover rounded-lg mb-3"
  />
) : (
  <div className="w-full rounded-lg mb-3 bg-black/5 p-3 text-sm text-[#1f40ff] leading-tight">
    {producto.descripcion
      ? producto.descripcion
      : "Sin imagen disponible "}
  </div>
)}

      {/* SELECTOR DE FORMATO */}
      {tieneFormatos && (
        <select
          className="w-full mb-4 p-2 border bg-[#1f40ff] rounded-lg text-white font-semibold"
          onChange={(e) => {
            const formato = producto.formatos.find(
              (f) => f.id === parseInt(e.target.value)
            );
            setFormatoActual(formato);
          }}
        >
          {producto.formatos.map((formato) => (
            <option key={formato.id} value={formato.id}>
              {formato.nombre} - {formato.precio} €
            </option>
          ))}
        </select>
      )}

      {/* NOMBRE Y PRECIO (USAR precioFinal) */}
      <div className="mb-4 text-center"
          >
        <div className="bg-white">
        <h2 className="text-lg font-semibold text-[#1f40ff]">
          {producto.nombre}
        </h2>
        {producto.descripcioninfo && (
          <p className="text-sm text-[#1f40ff] mt-1 px-2 py-2 leading-snug">
            {producto.descripcioninfo}
          </p>
        )}


        <p className="text-[#1f40ff] font-bold mb-8 py-2">
          {precioFinal ? `${precioFinal} €` : ""}
        </p>
        </div>
      </div>

     

   
    </div>
  );
}

export default ProductoCardCliente;
