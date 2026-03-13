import { useState } from "react";

const imagenesPorCerveza = {

  "Estrella Damm": {
    "Botella": "https://res.cloudinary.com/dnhmo2rbe/image/upload/v1773438852/ChatGPT_Image_13_mar_2026_22_53_59_mprwno.png",
    "Jarra": "https://res.cloudinary.com/dnhmo2rbe/image/upload/v1773439037/ChatGPT_Image_13_mar_2026_22_57_01_mwity6.png",
    "1/5": "https://res.cloudinary.com/dnhmo2rbe/image/upload/v1773438958/ChatGPT_Image_13_mar_2026_22_55_47_aw5eqb.png"
  },
  "Turia":{
    "Jarra":"https://res.cloudinary.com/dnhmo2rbe/image/upload/v1773439386/ChatGPT_Image_13_mar_2026_23_02_41_qlwwbr.png"
  }


};

function ProductoCardCliente({ producto, categoriaSecundaria }) {
  const tieneFormatos = producto.formatos && producto.formatos.length > 0;

  const [formatoActual, setFormatoActual] = useState(
    tieneFormatos.length > 0 ? producto.formatos[0] : null
  );

  const marca = producto.nombre;
  const esCerveza = categoriaSecundaria === "Cervezas";

  const imagenDinamica =
    esCerveza && imagenesPorCerveza[marca]?.[formatoActual?.nombre];

  const precioFinal = tieneFormatos ? formatoActual?.precio : producto.precio;

 const formatosOrdenados = tieneFormatos
  ? [...producto.formatos].sort((a, b) => {
      const orden = (nombre) => {
        const n = nombre.toLowerCase();

        if (n.includes("copa")) return 1;
        if (n.includes("botella")) return 2;
        return 3;
      };

      return orden(a.nombre) - orden(b.nombre);
    })
  : [];
  return (
    <div
      className="rounded-xl bg-white border border-[#8fdfff] shadow-[0_0_15px_rgba(46,107,255,0.3)] p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Fondos/fondofinal.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {imagenDinamica ? (
        <img
          src={imagenDinamica}
          alt={producto.nombre}
          
          className="w-full h-64 object-cover rounded-lg mb-3"
        />
      ) : producto.imagen ? (
        <img
          src={producto.imagen}
          alt={producto.nombre}

          className="w-full h-64 object-cover rounded-lg mb-3"
        />
      ) : (
        <div className="w-full rounded-lg mb-3 bg-black/5 p-3 text-sm text-[#1f40ff] leading-tight">
          {producto.descripcion ? producto.descripcion : "Sin imagen disponible"}
        </div>
      )}

      {tieneFormatos && (
        <select
          className="w-full mb-4 p-2 border bg-[#1f40ff] rounded-lg text-white font-semibold"
          onChange={(e) => {
            const formato = producto.formatos.find(
              (f) => f.id === parseInt(e.target.value)
            );
            setFormatoActual(formato);
          }}
          value={formatoActual?.id || ""}
        >
          {formatosOrdenados.map((formato) => (
            <option key={formato.id} value={formato.id}>
              {formato.nombre} - {formato.precio} €
            </option>
          ))}
        </select>
      )}

      <div className="mb-4 py-4 text-center">
        <div
          className="bg-white"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <h2 className="text-lg font-semibold text-[#1f40ff]">
            {producto.nombre}
          </h2>

          {producto.descripcioninfo && (
            <p className="text-bg font-semibold text-[#1f40ff] mt-1 px-2 py-2 leading-snug">
              {producto.descripcioninfo}
            </p>
          )}

          <p className="text-[#1f40ff] font-bold mb-8 py-2">
            {precioFinal ? `${precioFinal} €` : producto.precio ? `${producto.precio} €` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductoCardCliente;