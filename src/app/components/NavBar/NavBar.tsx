import localImage from "../../../img/Logo.png";
import Image from "next/image";

export default function NavBar() {

    return (
      <div style={{ height: 75, backgroundColor: '#031017' }}>
        <Image
            src={localImage}
            alt="Picture of the author"
            />
      </div>
    );
  }
  