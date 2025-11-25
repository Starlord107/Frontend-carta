export default function ModalPedidoEnviado({ abierto, cerrar }) {
  if (!abierto) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/60 backdrop-blur-sm
        flex items-center justify-center
      "
    >
      <div
        className="
          bg-white rounded-2xl shadow-xl
          w-11/12 max-w-sm p-6 text-center
        "
      >
        <h2 className="text-xl font-bold mb-4">
          Pedido Enviado 🍽🔥
        </h2>

        <p className="text-gray-700 mb-6">
          Tu pedido ha sido enviado a cocina.<br />
          ¡Lo están preparando ahora mismo!
        </p>

        <button
          onClick={cerrar}
          className="
            bg-blue-600 text-white font-semibold
            px-6 py-3 rounded-full w-full
          "
        >
          Vale
        </button>
      </div>
    </div>
  );
}
