import localImage from "../../../img/Logo.png";
import Image from "next/image";
import "./navbar.css"
import { Button } from "react-bootstrap";

const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-logo"> <img src="/Logo.png" alt="Logo"/> </div>
      <div className="navbar-onlipinion">ONLIPINION</div>
      <div className="navbar-categorias">CATEGORIAS</div>
      <div className="navbar-recomendacoes">RECOMENDAÇÕES</div>
      <div className="navbar-sobre">SOBRE</div>
      <div className="navbar-contato">CONTATO</div>
      <div className="navbar-login"> <button type="button" className="botao-login">LOGIN</button> </div>
      <div className="navbar-pesquisa"> <input type="navbar-barra-pesquisa" className="navbar-barra-pesquisa" /> </div>
    </nav>
  );
};

export default Navbar;