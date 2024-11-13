'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Importa o roteador do Next.js
import style from "./header.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cadastro from "../paginaAutenticacao/page"

export default function Header() {
  const router = useRouter(); // Inicializa o roteador do Next.js
  const [telaAtiva, setTelaAtiva] = useState("início");

  // Função para alternar entre as telas
  const handleNavigation = (novaTela: string) => {
    setTelaAtiva(novaTela);
    // Redireciona para a rota correspondente
    switch (novaTela) {
      case 'início':
        router.push('/');
        break;
      case 'login':
        router.push('/');
        break;
      case 'informações':
        router.push('/');
        break;
      case 'mais':
        router.push('/');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <div className={style.fundo}>
      <div className={style.navbar}>
        <ul className={style.ul}>
          
          {/* Link para a página Início */}
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

          {/* Link para a página Login */}
          <li
            className={`${style.li} ${telaAtiva === "login" ? style.ativo : ""}`}
            onClick={() => handleNavigation("login")}
          >
            <a className={style.a}>
              <span className={style.icone}>
                <i className="fa-solid fa-user"></i>
              </span>
              <span className={style.textoNav}>Autenticar Usuário</span>
            </a>
          </li>

          {/* Link para a página Informações */}
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

          {/* Link para a página Mais */}
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
