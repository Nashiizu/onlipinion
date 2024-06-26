import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import TextoBanner from "../components/TextoBanner/TextoBanner";
import BotaoAvaliacoes from "../components/BotaoAvaliacoes/BotaoAvaliacoes";
import BackgroundBranco from "../components/BackgroundBranco/BackgroundBranco"
import TextoBrackgroundBranco from "../components/TextoBackgroundBranco/TextoBackgroundBranco"
import BotaoCadastrarProdutos from "../components/BotaoCadastrarProdutos/BotaoCadastrarProdutos"

export default function PaginaInicial() {
  return (
    <div>
      <NavBar />
      <Banner />
      <TextoBanner />
      <BotaoAvaliacoes></BotaoAvaliacoes>
      <BackgroundBranco></BackgroundBranco>
      <TextoBrackgroundBranco></TextoBrackgroundBranco>
      <BotaoCadastrarProdutos></BotaoCadastrarProdutos>
    </div>
  );
}
