"use client";
import React from "react";
import Link from "next/link"; 
import { usePathname } from "next/navigation"; // Hook para capturar o pathname atual
import style from "./header.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={style.navbar}>
      <ul className={style.ul}>
        {/* Link para a página Início */}
        <li
          className={`${style.li} ${
            pathname === "/componentes/home" ? style.ativo : ""
          }`}
        >
          <Link href="/componentes/home" className={style.linkHeader}>
            <span className={style.icone}>
              <i className="fa-solid fa-house"></i>
            </span>
            <span className={style.textoNav}>Início</span>
          </Link>
        </li>

        {/* Link para a página de autenticação */}
        <li
          className={`${style.li} ${
            pathname === "/componentes/paginaAutenticacao" ? style.ativo : ""
          }`}
        >
          <Link
            href="/componentes/paginaAutenticacao"
            className={style.linkHeader}
          >
            <span className={style.icone}>
              <i className="fa-solid fa-user-plus"></i>
            </span>
            <span className={style.textoNav}>Autenticação</span>
          </Link>
        </li>

        {/* Link para a página Informações */}
        <li
          className={`${style.li} ${
            pathname === "/componentes/cadastroReserva" ? style.ativo : ""
          }`}
        >
          <Link
            href="/componentes/cadastroReserva"
            className={style.linkHeader}
          >
            <span className={style.icone}>
              <i className="fa-solid fa-address-book"></i>
            </span>
            <span className={style.textoNav}>Reservas</span>
          </Link>
        </li>

        {/* Link para a página Mais */}
        <li
          className={`${style.li} ${
            pathname === "/componentes/perfilUsuario" ? style.ativo : ""
          }`}
        >
          <Link href="/componentes/perfil" className={style.linkHeader}>
            <span className={style.icone}>
              <i className="fa-solid fa-person"></i>
            </span>
            <span className={style.textoNav}>Perfil</span>
          </Link>
        </li>

        <div className={style.indicador}></div>
      </ul>
    </div>
  );
}
