import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SeleccionarMesa() {
  const [mesas, setMesas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/mesas")
      .then(res => res.json())
      .then(data => setMesas(data));
  }, []);

  const seleccionarMesa = (mesa) => {
    navigate(`/camarero/carta/${mesa.id}`);
  };

  const cerrarMesa = async (id) => {
    await fetch(`http://localhost:4000/api/mesas/${id}/estado`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: "libre" })
    });

    await fetch(`http://localhost:4000/api/pedidos/mesa/${id}`, {
      method: "DELETE"
    });

    const response=await fetch("http://localhost:4000/api/mesas");
    const mesasActualizadas=await response.json();
    setMesas(mesasActualizadas);
  };

  return (
    <>

      <div className="p-6">
        <h1 className="text-2xl text-center font-bold mb-6 text-[#1f40ff]">
          Selecciona una mesa
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {mesas.map((mesa) => (
            <div key={mesa.id} className="flex flex-col gap-2">

              {/* BOTÓN PRINCIPAL */}
              <button
                onClick={() => seleccionarMesa(mesa)}
                className={`
                  py-4 rounded-2xl text-lg font-semibold shadow-lg
                  text-white
                  ${mesa.estado === "ocupada" ? "bg-red-600" : "bg-green-600"}
                `}
              >
                {mesa.nombre}
              </button>

              {/* BOTÓN CERRAR MESA */}
              {mesa.estado === "ocupada" && (
                <button
                  onClick={() => cerrarMesa(mesa.id)}
                  className="bg-gray-800 text-white py-2 rounded-xl text-sm"
                >
                  Cerrar Mesa (Cobrar)
                </button>
              )}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
