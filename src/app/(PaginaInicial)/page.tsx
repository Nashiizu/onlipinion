import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import TextoBanner from "../components/TextoBanner/TextoBanner";
import BotaoAvaliacoes from "../components/BotaoAvaliacoes/BotaoAvaliacoes";
import BotaoCadastrarProdutos from "../components/BotaoCadastrarProdutos/BotaoCadastrarProdutos"

export default function PaginaInicial() {
  return (
    <div>
      <NavBar />
      <Banner />
      <TextoBanner />
      <BotaoAvaliacoes></BotaoAvaliacoes>
      <BotaoCadastrarProdutos></BotaoCadastrarProdutos>
    </div>
  );
}
