import LogoIcon from "./LogoIcon";
import LogoInstagramHavana66 from "./LogoInstagram";
import LogoGoogleReviews from "./LogoGoogleReview";

function HeaderCliente() {

  return (
    <header className="flex justify-between items-center   border-b border-[#9ee4ff] px-6 py-4"
    style={{ backgroundImage: "url('/Fondos/fondofinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          }}
    >

      {/* LOGO */} 
      
      <LogoIcon size={70} />
      <div className="flex-grow mx-4 items-center text-center ">
    
      </div>
        <div className="flex gap-2 ">
        <a
          href="https://www.instagram.com/havana66_gava/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoInstagramHavana66 size={120} />
        </a>
        <div style={{ padding: '10px' }}>

        <a
          href="https://www.google.com/search?sca_esv=517629e0db3c0ca4&sxsrf=ANbL-n4bE_8ni9z7lHulnzTUgWeN-6cjJg:1773243749635&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTy12zPphqetZrcgJaHWkE2Mmq2AKg0LHRlejgGETmNiHCLH8PHPMdhgz58Xu8v-Jr3jk_ifljF5Sq_2HSNDs7biqk-y&q=Havana+66+Reviews&sa=X&ved=2ahUKEwjDjbDel5iTAxVSNvsDHZJzLqwQ0bkNegQIJRAF&biw=735&bih=740&dpr=2&zx=1773243754254&no_sw_cr=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGoogleReviews size={100} />
        </a>

        </div>
       
      </div>
     

    </header>
  );
}

export default HeaderCliente;
