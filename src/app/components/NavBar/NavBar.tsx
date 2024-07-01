import Logo from "../../../../src/assets/img/Logo.png";
import Image from "next/image";
import "./navbar.css"
import SearchBar from "../SearchBar/SearchBar";
import BotaoLogin from "../BotaoLogin/BotaoLogin";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> <Image src={Logo} alt="Logo" /> </div>
      <div className="navbar-onlipinion">ONLIPINION</div>
      <div className="navbar-categorias">CATEGORIAS</div>
      <div className="navbar-recomendacoes">RECOMENDAÇÕES</div>
      <div className="navbar-sobre">SOBRE</div>
      <div className="navbar-contato">CONTATO</div>
      <BotaoLogin />
      <SearchBar />
    </nav>
  );
};

export default Navbar;