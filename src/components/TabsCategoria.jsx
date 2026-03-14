import { Tabs, Tab } from "@heroui/react";

export default function CategoriasTabs({
  categoriaPrincipal,
  setCategoriaPrincipal,
  categoriaSecundaria,
  setCategoriaSecundaria,
}) {
  const categorias = {
    Bebidas: ["Cocteles", "Vinos", "Sangrias", "Tragos", "Refrescos", "Cervezas"],
    Comidas: ["Hamburguesas", "Tapas", "Bocadillos", "Platos", "Postres"],
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <div
        className="bg-white border border-[#8fdfff] rounded-2xl px-3 py-2 shadow-md w-full"
        style={{
          backgroundImage: "url('/Fondos/fondofinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Tabs
          disableAnimation
          fullWidth
          disableIndicator
          selectedKey={categoriaPrincipal}
          onSelectionChange={(key) => {
            setCategoriaPrincipal(key);
          }}
          color="default"
          variant="solid"
          radius="lg"
          size="lg"
          classNames={{
            tabList: "gap-4 bg-transparent",
            tab: `
              flex-1 min-w-0 text-center
              px-4 py-2 rounded-xl text-sm font-semibold
              data-[selected=true]:bg-[#1f40ff]
              data-[selected=true]:text-white
              data-[selected=false]:bg-transparent
              data-[selected=false]:text-black
            `,
          }}
        >
          <Tab
            key="Bebidas"
            
            title={
              <div className="flex items-center justify-center w-full gap-2">
               
                <span>Bebidas</span>
              </div>
            }
          />
          <Tab
            key="Comidas"
            title={
              <div className="flex items-center justify-center w-full gap-2">
              
                <span>Comidas</span>
              </div>
            }
          />
        </Tabs>
      </div>

      <div className="bg-white border border-[#8fdfff] rounded-2xl px-3 py-3 shadow-md w-full">
        <div
          className={`grid gap-3 ${
            categoriaPrincipal === "Bebidas"
              ? "grid-cols-2 sm:grid-cols-3"
              : "grid-cols-2"
          }`}
        >
          {categorias[categoriaPrincipal].map((sub) => {
            const fileName = sub
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            const iconSrc =
              categoriaPrincipal === "Bebidas"
                ? categoriaSecundaria === sub
                  ? `/bebidas/${fileName}white.png`
                  : `/bebidas/${fileName}.png`
                : categoriaSecundaria === sub
                ? `/comidas/${fileName}white.png`
                : `/comidas/${fileName}.png`;

            const seleccionada = categoriaSecundaria === sub;

            const iconSize =
              sub === "Bocadillos"
                ? "w-8 h-8"
                : sub === "Postres"
                ? "w-10 h-10"
                : sub === "Platos"
                ? "w-14 h-12"
                : "w-6 h-6";

            return (
              <button
                key={sub}
                type="button"
                onClick={() => setCategoriaSecundaria(sub)}
                style={
                  
                  !seleccionada
                    ? {
                        backgroundImage: "url('/Fondos/fondofinal.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
                className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold min-h-[56px] transition-all duration-200 ${
                  sub==="Postres"?"col-span-2":""
                  } ${
                  seleccionada
                    ? "bg-[#1f40ff] text-white shadow-md"
                    : "text-black hover:bg-[#eef4ff]"
                }`}
              >
              

                <span className="truncate">{sub}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}