import { Badge } from "@heroui/react";
import CarroIcon from "./CarroIcon";
import LogoIcon from "./LogoIcon";
import BandejaIcon from "./bandejaIcon";

function Header({ carritoCount, abrirCarrito }) {
  return (
    <header className="flex justify-between items-center   border-b border-[#1f40ff] px-6 py-4">

      {/* LOGO */} 
      <LogoIcon size={70} />
      {/* CARRITO */}
      <button onClick={abrirCarrito} className="relative">


        <BandejaIcon size={60} style={{ color: "#1f40ff" }} cantidad={carritoCount} />
      </button>

    </header>
  );
}

export default Header;
