import localImage from "../../../img/Logo.png";
import Image from "next/image";
import "./navbar.css"

export default function NavBar() {

    return (
      <div style={{ height: 75, backgroundColor: '#031017', display: 'flex'}}>
        <Image
          src={localImage}
          alt="Picture of the author"
        />
        <h1>ONLIPINION</h1>
      </div>
    );
  }
  