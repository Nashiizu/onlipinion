"use client"
import { useState } from 'react';
import Image from "next/image";
import Lupa from "../../../../src/assets/img/Lupa.png";
import "./searchbar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Pesquisar:', searchTerm);
    // Aqui você pode adicionar a lógica para pesquisar
  };

  return (
    <form onSubmit={handleSubmit} className="pesquisar-form">
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
        className="pesquisar-input"
      />
      <Image className="lupa" src={Lupa} alt="Lupa" />
    </form>
  );
};

export default SearchBar;
