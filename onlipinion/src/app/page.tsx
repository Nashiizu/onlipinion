"use client"
import Logo from "../../public/favicon.svg";
import Instagram from "../../public/assets/icons/Instagram.svg";
import Circulo from "../../public/assets/icons/Circulo.svg";
import Image from "next/image";
import "./globals.css"
import "./home.css";
import Background from "./components/Background/Background"
import Text from "./components/Text/Text";
import "../app/components/Input/Input";
import Button from "./components/Button/Button";

function Home() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Adicione a lógica para o que deve acontecer ao enviar o formulário, se necessário
    console.log("Formulário enviado, mas ação de envio foi prevenido.");
  };

  return (
    <>
      <div className="header">
        <Background className="background banner center">
          <div className="area-header">
            <div className="text-area-header">
              <Text className="title color-white">deixe suas indicações e<br />reclamações registradas aqui!</Text>
              <Text className="text color-green-light">procure conhecer o que as pessoas dizem sobre vários produtos</Text>
            </div>

            <div className="button-area-header">
              <div className="col-button-area-header1">
                <Button className="button-reviews">avaliações</Button>
              </div>
              <div className="col-button-area-header2">
                <Button className="button-register-products">cadastrar produtos</Button>
              </div>
            </div>
          </div>
        </Background>
      </div>

      <div className="main">
        <Background className="background background-white center">
          <div className="area-main">
            <div className="area-description-main">
              <Text className="title color-green-dark">procure produtos</Text>
              <Text className="text color-green-light">procure dentro das categorias o produto que deseja saber mais sobre</Text>
            </div>
          </div>
        </Background>
      </div>

      <div className="footer">
        <Background className="background background-white-footer center">
          <div className="area-footer">
            <div className="row-geral">
              <div className="col-description-footer-alignment-1">
                <Text className="title color-green-dark">quem somos</Text>

                <div className="logo-area-footer">
                  <Image src={Logo} alt="Logo" className="style-img-logo" />
                  <Text className="color-green-light logo-text-footer">onlipinion</Text>
                </div>

                <Text className="text-footer color-green-light">
                  <strong>Bem-vindo ao Onlipinion!</strong>
                  <p>A Onlipinion surgiu de um projeto inovador do nosso curso técnico em TI. Durante o desenvolvimento, percebemos o imenso potencial do nosso site para se transformar em uma plataforma significativa e funcional.</p>
                  <br />
                  <strong>Nossa Missão:</strong>
                  <p>A nossa missão é conectar pessoas e oferecer uma plataforma onde opiniões e experiências podem ser compartilhadas e discutidas. Buscamos alcançar o maior número possível de usuários, oferecendo informações que ajudem na formação de respostas e na solução de dúvidas que podem ser um obstáculo no dia a dia.</p>
                  <br />
                  <strong>O que Oferecemos:</strong>
                  <p>Na Onlipinion, nosso objetivo é proporcionar o melhor possível com os recursos disponíveis. Estamos comprometidos em melhorar continuamente, mesmo que, por ora, nossas condições sejam limitadas. Cada feedback, cada sugestão e cada interação é uma oportunidade para aprimorar e evoluir.</p>
                  <br />
                  <strong>Nosso Compromisso:</strong>
                  <p>Estamos dedicados a oferecer uma experiência enriquecedora e útil para todos os nossos usuários. Embora estejamos em constante crescimento e aprendizado, nossa paixão por fornecer um serviço valioso é o que nos motiva a buscar sempre o melhor.</p>
                  <br />
                  <p>Junte-se a nós e faça parte dessa jornada para transformar a forma como as opiniões e dúvidas são abordadas e resolvidas. A Onlipinion está aqui para ajudar, ouvir e crescer junto com você!</p>
                </Text>
              </div>

              <form className="col-description-footer-alignment-2" onSubmit={handleSubmit}>
                <Text className="title-contate-nos color-green-dark area-contate-nos">contate-nos</Text>
                <div className="col-bar">
                  <input type="text" name="nome" className="fill-bar margin-fill-bar" placeholder="Nome" />
                  <input type="text" name="email" className="fill-bar margin-fill-bar" placeholder="Email" />
                  <input type="text" name="categoria" className="fill-bar margin-fill-bar" placeholder="Categoria" />
                  <textarea className="fill-bar-resposta margin-fill-bar" rows={3} maxLength={565} placeholder="Resposta"></textarea>
                  <Button className="button-send">Enviar</Button>
                </div>
              </form>
            </div>

            <div className="position-copyright-area-footer-geral">
              <div className="col-description-footer-1">
                <div className="position-copyright-area-footer-description">
                  <div className="position-copyright-area-footer-alignment">
                    <Button className="button-scroll-to-top"><Image src={Logo} alt="Logo" className="style-img-logo" /></Button>
                    <div className="text-logo-area-footer">
                      <Text className="color-green-dark title-copyright">© 2024 onlipinion</Text>
                      <Text className="color-green-light text-copyright">todos direitos reservados</Text>
                    </div>
                  </div>

                  <div className="instagram-area-footer">
                    <Button className="button-instagram-scroll-to-top"><Image src={Instagram} alt="Instagram" className="style-img-instagram" /></Button>
                    <Button className="button-instagram-scroll-to-top"><Text className="color-green-dark title-redes-sociais">instagram</Text></Button>
                  </div>
                </div>
              </div>

              <div className="col-description-footer-2">
                <div className="area-button-scroll-to-top">
                  <Button className="button-scroll-to-top"><Image src={Circulo} alt="Circulo" className="Circulo" /></Button>
                </div>

                <div className="area-logo-footer-scroll-to-top">
                <Button className="button-scroll-to-top"><Image src={Logo} alt="Logo" className="style-img-logo" /></Button>
                </div>
              </div>

            </div>
          </div>
        </Background >
      </div >
    </>
  );
};

export default Home;