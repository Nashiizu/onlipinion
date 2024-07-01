import Image from "next/image";
import "./home.css"
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Carrossel from "../components/Carrossel/Carrossel";
import TextoBanner from "../components/TextoBanner/TextoBanner";
import BotaoAvaliacoes from "../components/BotaoAvaliacoes/BotaoAvaliacoes";
import WhiteBackground from "../components/WhiteBackground/WhiteBackground";
import TextoBrackgroundBranco from "../components/TextoBackgroundBranco/TextoBackgroundBranco";
import BotaoCadastrarProdutos from "../components/BotaoCadastrarProdutos/BotaoCadastrarProdutos";

function Home() {
  return (
    <div>
      <NavBar />
      <TextoBanner />
      <BotaoAvaliacoes />
      <TextoBrackgroundBranco />
      <BotaoCadastrarProdutos />
      <Carrossel />
      <Banner />
      <WhiteBackground />
    </div>
  );
}

export default Home;