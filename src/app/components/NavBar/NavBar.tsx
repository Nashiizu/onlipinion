import localImage from "../../../img/Logo.png";
import Image from "next/image";
import "./navbar.css"

const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-logo"> <img src="/Logo.png" alt="Logo"/> </div>
      <div className="navbar-onlipinion">ONLIPINION</div>
      <div className="navbar-categorias">CATEGORIAS</div>
      <div className="navbar-recomendacoes">RECOMENDAÇÕES</div>
      <div className="navbar-sobre">SOBRE</div>
      <div className="navbar-contato">CONTATO</div>
    </nav>
  );
};

export default Navbar;

