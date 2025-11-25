function CategoriasSecundarias({
  categoriaPrincipal,
  categoriaSecundaria,
  setCategoriaSecundaria
}) {
  const categorias = {
    Bebidas: ["Cócteles", "Vinos", "Sangrías", "Tragos", "Refrescos"],
    Comidas: ["Hamburguesas", "Bocadillos", "Especial", "Pica Pica", "Platos"],
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-3">
      {categorias[categoriaPrincipal].map(sub => (
        <button
          key={sub}
          onClick={() => setCategoriaSecundaria(sub)}
          className={`px-4 py-2 rounded-full  text-sm font-semibold ${
            categoriaSecundaria === sub
              ? "bg-[#1E40FF] text-white shadow"
              : "bg-[#172033] text-gray-300"
          }`}
        >
          {sub}
        </button>
      ))}
    </div>
  );
}

export default CategoriasSecundarias;
