'use client';
import Logo from "../../../../public/assets/icons/Logo.svg";
import Image from "next/image";
import "./navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import Text from "../Text/Text";
import { useRouter, usePathname } from "next/navigation";
import Button from "../Button/Button";
import React, { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (pathname === '/') {
      window.requestAnimationFrame(smoothScrollToTop);
    } else {
      router.push('/');
    }
  };

  const smoothScrollToTop = () => {
    const scrollDuration = 400;
    const scrollStep = -window.scrollY / (scrollDuration / 16.66);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 16.66);
  };

  return (
    <nav className="navbar">
      <nav className="background-navbar">
        <nav className="navbar-area">
          <HamburgerMenu />
          <a className="navbar-logo" href="#" onClick={scrollToTop}>
            <Image src={Logo} alt="Logo" className="style-img-logo" />
            <Text className="text-navbar-onlipinion">onlipinion</Text>
          </a>
          <Text className="text-navbar-categories">categorias</Text>
          <Text className="text-navbar-recommendations">recomendações</Text>
          <Text className="text-navbar-about">sobre</Text>
          <Text className="text-navbar-contact">contato</Text>
          <SearchBar />
          <Button className="button-login text-button-login">login</Button>
        </nav>
      </nav>
    </nav>
  );
}

export default Navbar;
