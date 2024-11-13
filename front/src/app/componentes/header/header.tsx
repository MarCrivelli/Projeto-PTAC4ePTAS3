'use client'
import React, { useState } from "react";
import style from "./header.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  // Define o estado para controlar a tela ativa
  const [telaAtiva, setTelaAtiva] = useState("início");

  // Função para alternar entre as telas, com tipo explícito para 'novaTela'
  const handleNavigation = (novaTela: string) => {
    setTelaAtiva(novaTela);
  };

  return (
    <div className={style.fundo}>
      <div className={style.navbar}>
        <ul className={style.ul}>
          
          {/* Leva para a página home */}
          <li
            className={`${style.li} ${telaAtiva === "início" ? style.ativo : ""}`}
            onClick={() => handleNavigation("início")}
          >
            <a className={style.a}>
              <span className={style.icone}>
                <i className="fa-solid fa-house"></i>
              </span>
              <span className={style.textoNav}>Início</span>
            </a>
          </li>

          {/*Leva pra a página "login"*/}
          <li
            className={`${style.li} ${telaAtiva === "login" ? style.ativo : ""}`}
            onClick={() => handleNavigation("login")}
          >
            <a className={style.a}>
              <span className={style.icone}>
                <i className="fa-solid fa-user"></i>
              </span>
              <span className={style.textoNav}>Login</span>
            </a>
          </li>

          {/* Leva pra a página "informações" */}
          <li
            className={`${style.li} ${telaAtiva === "informações" ? style.ativo : ""}`}
            onClick={() => handleNavigation("informações")}
          >
            <a className={style.a}>
              <span className={style.icone}>
                <i className="fa-solid fa-info-circle"></i>
              </span>
              <span className={style.textoNav}>Informações</span>
            </a>
          </li>

          {/* Leva pra a página "mais" */}
          <li
            className={`${style.li} ${telaAtiva === "mais" ? style.ativo : ""}`}
            onClick={() => handleNavigation("mais")}
          >
            <a className={style.a}>
              <span className={style.icone}>
                <i className="fa-solid fa-ellipsis-h"></i>
              </span>
              <span className={style.textoNav}>Mais</span>
            </a>
          </li>

          <div className={style.indicador}></div>
        </ul>
      </div>
    </div>
  );
}
