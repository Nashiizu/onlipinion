import Logo from "../../../img/Logo.png";
import Image from "next/image";
import "./navbar.css"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";

const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-logo"> <Image src={Logo} alt="Logo"/> </div>
      <div className="navbar-onlipinion">ONLIPINION</div>
      <div className="navbar-categorias">CATEGORIAS</div>
      <div className="navbar-recomendacoes">RECOMENDAÇÕES</div>
      <div className="navbar-sobre">SOBRE</div>
      <div className="navbar-contato">CONTATO</div>
      <div className="navbar-login"> <button type="button" className="botao-login">LOGIN</button> </div>
      <BarraPesquisa></BarraPesquisa>
    </nav>
  );
};

export default Navbar;