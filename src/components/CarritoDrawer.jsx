import { Button } from "@heroui/react";

export default function CarritoDrawer({
  abierto,
  cerrar,
  carrito,
  enviarPedido,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
}) {
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div
      className={`
        fixed left-0 right-0 bottom-0 z-50
        bg-[#0a0f3d] text-white border-t border-blue-500 
        shadow-2xl rounded-t-2xl
        transition-transform duration-300
        ${abierto ? "translate-y-0" : "translate-y-full"}
      `}
      style={{ height: "75vh" }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b border-blue-900">
        <h2 className="text-xl font-bold text-white">Tu Pedido</h2>
        <button onClick={cerrar} className="text-white text-xl leading-none">
          Cerrar
        </button>
      </div>

      {/* LISTA */}
      <div className="overflow-y-auto px-5 py-4 mb-40">
        {carrito.length === 0 ? (
          <p className="text-gray-400 text-center py-6">
            El carrito está vacío
          </p>
        ) : (
          carrito.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-blue-800 py-4"
            >
              {/* Nombre + precio */}
              <div className="flex-1">
                <p className="font-semibold text-white">{item.nombre}</p>
                <p className="text-blue-300 text-sm">
                  {item.precio} € / unidad
                </p>
              </div>

              {/* Contador */}
              <div className="flex items-center gap-2 ">
                <button
                  onClick={() => disminuirCantidad(item.id)}
                  className="bg-blue-700 text-white w-7 h-7 rounded-full"
                >
                  -
                </button>

                <span className="text-white text-lg">{item.cantidad}</span>

                <button
                  onClick={() => aumentarCantidad(item.id)}
                  className="bg-blue-700 text-white w-7 h-7 rounded-full"
                >
                  +
                </button>
              </div>

              {/* Total + borrar */}
  <div className="flex items-center gap-3 min-w-[100px] justify-end">
                <span className="text-blue-400 font-bold">
                  {(item.precio * item.cantidad).toFixed(2)} €
                </span>

                <button
                  onClick={() => eliminarProducto(item.id)}
                  className="text-red-500 text-xl"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-0 left-0 right-0 bg-[#0a0f3d] p-5 border-t border-blue-900 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">Total:</span>
          <span className="text-xl font-bold text-white">
            {total.toFixed(2)} €
          </span>
        </div>
<div>
<Button
  fullWidth
  radius="full"
  variant="solid"

  
  
  style={{ backgroundColor: "#1f40ff" ,color: "white" , fontWeight: "600",
    padding: "14px",
}}
isDisabled={carrito.length === 0}

  onClick={enviarPedido}
>
  Enviar Pedido
</Button>
</div>  
      </div>
    </div>
  );
}
