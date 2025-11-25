import { useState } from "react";

function ProductoCard({ producto, añadirAlCarrito }) {
  // Cantidad seleccionada
  const [cantidad, setCantidad] = useState(0);

  // Si el producto tiene formatos
  const tieneFormatos = producto.formatos && producto.formatos.length > 0;

  // Formato actual seleccionado
  const [formatoActual, setFormatoActual] = useState(
    tieneFormatos ? producto.formatos[0] : null
  );

  // Precio final a mostrar
  const precioFinal = tieneFormatos ?formatoActual.precio : producto.precio;

  const incrementar = () => setCantidad(cantidad + 1);

  const decrementar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    if (cantidad > 0) {
      añadirAlCarrito(
        {
          ...producto,
          formato: formatoActual ? formatoActual.nombre : null,
          precio: precioFinal
        },
        cantidad
      );
      setCantidad(0);
    }
  };

  return (
    <div className="rounded-xl bg-white border border-[#1E40FF] shadow-[0_0_15px_rgba(46,107,255,0.3)] p-4">
      {/* IMAGEN */}
      <img
        src={`/${producto.imagen}`}
        alt={producto.nombre}
        className="w-full object-contain rounded-lg mb-3 bg-black/10"
      />

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
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold text-[#1f40ff]">
          {producto.nombre}
        </h2>

        <p className="text-[#1f40ff] font-bold mb-8">
          {precioFinal ? `${precioFinal} €` : ""}
        </p>
      </div>

      {/* CONTADOR */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <button
          onClick={decrementar}
          className="bg-[#1E40FF] text-white w-8 h-8 rounded-full text-lg"
        >
          –
        </button>

        <span className="text-[#1f40ff] text-lg font-semibold">
          {cantidad}
        </span>

        <button
          onClick={incrementar}
          className="bg-[#1E40FF] text-white w-8 h-8 rounded-full text-lg"
        >
          +
        </button>
      </div>

      {/* BOTÓN AGREGAR */}
      <button
        onClick={agregar}
        disabled={cantidad === 0}
        className={`w-full py-2 rounded-lg ${
          cantidad === 0 ? "bg-gray-300 text-gray-500" : "bg-green-600 text-white"
        }`}
      >
        Agregar
      </button>
    </div>
  );
}

export default ProductoCard;
