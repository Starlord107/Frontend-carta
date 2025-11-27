import { Button } from "@heroui/react";

export default function PedidoActualDrawer({
  abierto,
  cerrar,
  pedido,            // ATENCIÓN: aquí llegan TODOS los pedidos
  abrirNuevoPedido,
}) {

  // Calcular total de TODOS los pedidos
  const total = pedido
    ? pedido.flat().reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    : 0;

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
        <h2 className="text-xl font-bold text-white">Pedido Actual</h2>
        <button onClick={cerrar} className="text-white text-xl leading-none">
          Cerrar
        </button>
      </div>

      {/* LISTA DE PEDIDOS */}
      <div className="overflow-y-auto px-5 py-4" style={{ height: "calc(75vh - 160px)" }}>
        {!pedido || pedido.length === 0 ? (
          <p className="text-gray-400 text-center py-6">
            Esta mesa no tiene pedidos previos
          </p>
        ) : (
          pedido.map((pedidoIndividual, index) => (
            <div key={index} className="mb-6">
              
              {/* Título del pedido */}
            <h3 className="text-lg text-green-500 font-bold mb-2">
  {index === 0 ? "Último pedido" : `Pedido ${pedido.length - index}`}
</h3>


              {/* Items del pedido */}
              {pedidoIndividual.map(item => (
                <div
                  key={item.id + item.formato}
                  className="flex justify-between items-center border-b border-blue-800 py-3"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-white">{item.nombre}</p>

                    {item.formato && (
                      <p className="text-blue-300 text-sm">
                        Formato: {item.formato}
                      </p>
                    )}

                    <p className="text-blue-300 text-sm">
                      {item.precio} € / unidad
                    </p>
                  </div>

                  <span className="text-white text-lg font-semibold">
                    {item.cantidad} uds
                  </span>

                  <span className="text-blue-400 font-bold min-w-[70px] text-right">
                    {(item.precio * item.cantidad).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-0 left-0 right-0 bg-[#0a0f3d] p-5 border-t border-blue-900 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">Total acumulado:</span>
          <span className="text-xl font-bold text-white">
            {total.toFixed(2)} €
          </span>
        </div>

        <Button
          fullWidth
          radius="full"
          variant="solid"
          style={{
            backgroundColor: "#1f40ff",
            color: "white",
            fontWeight: "600",
            padding: "10px",
          }}
          onClick={() => {
            cerrar();
            abrirNuevoPedido();
          }}
        >
          Añadir más productos
        </Button>
      </div>
    </div>
  );
}
