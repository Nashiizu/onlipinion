import localImage from "../../../img/Logo.png";
import Image from "next/image";
import "./navbar.css"

export default function NavBar() {

  return (
    <div style={{ height: 75, backgroundColor: '#031017', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <Image
        src={localImage}
        alt="Picture of the author"
      />

      <div className="titulo">
        <h1>ONLIPINION</h1>
      </div>

      <div className="nav">
          <ul>
            <li>
              CATEGORIAS
            </li>
            <li>
              RECOMENDAÇÕES
            </li>
            <li>
              SOBRE
            </li>
            <li>
              CONTATO
            </li>
          </ul>
      </div>
    </div>
  );
}
