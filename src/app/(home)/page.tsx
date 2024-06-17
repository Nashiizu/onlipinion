import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
}
