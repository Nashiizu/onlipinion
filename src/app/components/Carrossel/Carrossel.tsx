import React from 'react';
import categoria1 from "../../../assets/img/Categoria-1.png";
import categoria2 from '../../../assets/img/Categoria-2.png';
import categoria3 from "../../../assets/img/Categoria-3.png";
import categoria4 from "../../../assets/img/Categoria-4.png";
import categoria5 from "../../../assets/img/Categoria-5.png";
import categoria6 from "../../../assets/img/Categoria-6.png";
import categoria7 from "../../../assets/img/Categoria-7.png";
import Image from "next/image";
import "./carrossel.css"

const Carrossel = () => {
    return (
        <div className="container">
            <div className="carrossel">
                <div className="categorias">
                    <div className="images-categorias">
                        <Image src={categoria1} alt="Descrição da imagem" className="imagesporra"/>
                    </div>
                    <div className="descricao">
                        <span className="nome">Informática</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrossel;