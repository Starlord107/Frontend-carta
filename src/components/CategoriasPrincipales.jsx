function CategoriasPrincipales({ categoriaPrincipal, setCategoriaPrincipal }) {
  const categorias = ["Bebidas", "Comidas"];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-3">
      {categorias.map(cat => (
        <button
          key={cat}
          onClick={() => setCategoriaPrincipal(cat)}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            categoriaPrincipal === cat
              ? "bg-[#1E40FF] text-white"
              : "bg-[#172033] text-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoriasPrincipales;
