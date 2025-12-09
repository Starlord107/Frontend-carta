import { Badge, Button } from "@heroui/react";
import CarroIcon from "./CarroIcon";
import LogoIcon from "./LogoIcon";
import BandejaIcon from "./bandejaIcon";
import { useNavigate } from "react-router-dom";

function HeaderCliente() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center   border-b border-[#9ee4ff] px-6 py-4"
    style={{ backgroundImage: "url('/Fondos/fondofinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          }}
    >

      {/* LOGO */} 
      
      <LogoIcon size={70} />
      <div className="flex-grow mx-4 items-center text-center "
      
      
      >
       
      </div>
     

    </header>
  );
}

export default HeaderCliente;
