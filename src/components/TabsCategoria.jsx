import { Tabs, Tab } from "@heroui/react";

export default function CategoriasTabs({
  categoriaPrincipal,
  setCategoriaPrincipal,
  categoriaSecundaria,
  setCategoriaSecundaria,
}) {
  const categorias = {
    Bebidas: ["Cocteles", "Vinos", "Sangrias", "Tragos", "Refrescos","Cervezas"],
    Comidas: ["Hamburguesas", "Tapas", "Bocadillos", "Platos"],
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-6">


      {/* ------------------ TABS PRINCIPALES (siempre visibles) ------------------ */}
      <div className="bg-white border border-[#8fdfff] rounded-2xl px-3 py-2 shadow-md no-scrollbar w-full">
        <Tabs
        disableAnimation
        fullWidth
        disableIndicator
          selectedKey={categoriaPrincipal}
          onSelectionChange={(key) => {
            setCategoriaPrincipal(key);
            setCategoriaSecundaria(""); // Reset subtabs
          }}
          color="default"
          variant="solid"
          radius="lg"
          classNames={{
            tabList: "gap-4",
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
    <div className="flex  items-center  justify-center  w-full gap-2">
      <img src={categoriaPrincipal==="Bebidas"?"  /bebidas/bebidawhite.png":"/bebidas/bebida.png"} width="30" height="40" alt="Bebidas" />
      <span>Bebidas</span>
    </div>
  }
/>
          <Tab
            key="Comidas"
            title={
              <div className="flex  items-center  justify-center  w-full gap-2">
                <img src={categoriaPrincipal==="Comidas"?"/sswhite.png":"/ss.png"} width="30" height="40" alt="Comidas"
                />
                <span>Comidas</span>
              </div>
            }
          />
        </Tabs>
      </div>


    


      {/* ------------------ TABS SECUNDARIAS (siempre visibles) ------------------ */}
<div className="bg-white border border-[#8fdfff] rounded-2xl px-3 py-2 shadow-md 
                overflow-x-auto whitespace-nowrap no-scrollbar w-full">
        <Tabs
          disableAnimation
          fullWidth
          disableIndicator
          selectedKey={categoriaSecundaria}
          onSelectionChange={setCategoriaSecundaria}
          color="default"
          variant="solid"
          radius="lg"
          classNames={{
            tabList: "flex w-max justify-start gap-4",
            tab: `
              px-8 py-1.5 rounded-xl text-sm font-semibold
              data-[selected=true]:bg-[#1f40ff]
              data-[selected=true]:text-white
              data-[selected=false]:bg-transparent
              data-[selected=false]:text-black
            `,
          }}
        >
          {categorias[categoriaPrincipal].map((sub) => {
  const baseFolder = categoriaPrincipal === "Comidas" ? "comidas" : "bebidas";

  // 1. Quitamos acentos y pasamos a minúsculas para los nombres de archivo
  const fileName = sub
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // 2. Elegimos la imagen correcta (negra o blanca) según la carpeta
  const iconSrc =
  categoriaPrincipal === "Bebidas"
    ? (categoriaSecundaria === sub
        ? `/bebidas/${fileName}white.png`
        : `/bebidas/${fileName}.png`)
    : categoriaPrincipal === "Comidas"
    ? (categoriaSecundaria === sub
        ? `/comidas/${fileName}white.png`
        : `/comidas/${fileName}.png`)
    : null;

  return (
    <Tab
      key={sub}
      title={
        <div className="flex items-center gap-2">
          <img
            src={iconSrc}
           className={
             `object-contain ${sub==="Platos"?"w-10 h-12":"w-6 h-6"}`
           }

            alt={sub}
          />
          <span>{sub}</span>
        </div>
      }
    />
  );
})}

        </Tabs>
      </div>

    </div>
  );
}
