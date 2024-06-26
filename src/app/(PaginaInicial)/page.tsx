import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import TextoBanner from "../components/TextoBanner/TextoBanner";
import BotaoAvaliacoes from "../components/BotaoAvaliacoes/BotaoAvaliacoes";
import BackgroundBranco from "../components/BackgroundBranco/BackgroundBranco"
import TextoBrackgroundBranco from "../components/TextoBackgroundBranco/TextoBackgroundBranco"
import BotaoCadastrarProdutos from "../components/BotaoCadastrarProdutos/BotaoCadastrarProdutos"
import Carrossel from "../components/Carrossel/Carrossel";

function PaginaInicial() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <TextoBanner/>
      <BotaoAvaliacoes/>
      <BackgroundBranco/>
      <TextoBrackgroundBranco/>
      <BotaoCadastrarProdutos/>
      <Carrossel/>
    </div>
  );
}

export default PaginaInicial;