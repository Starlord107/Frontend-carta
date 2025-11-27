import { Badge, Button } from "@heroui/react";
import CarroIcon from "./CarroIcon";
import LogoIcon from "./LogoIcon";
import BandejaIcon from "./bandejaIcon";
import { useNavigate } from "react-router-dom";

function Header({ carritoCount, abrirCarrito }) {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center   border-b border-[#1f40ff] px-6 py-4">

      {/* LOGO */} 
      <LogoIcon size={70} />
      <div className="flex-grow mx-4 items-center text-center">
        {<Button onClick={() => navigate("/")
          
        }        className="text-[#1f40ff] font-semibold text-lg"
>
          Ir a Mesas
          </Button>}
      </div>
      {/* CARRITO */}
      <button onClick={abrirCarrito} className="relative">


        <BandejaIcon size={60} style={{ color: "#1f40ff" }} cantidad={carritoCount} />
      </button>

    </header>
  );
}

export default Header;
