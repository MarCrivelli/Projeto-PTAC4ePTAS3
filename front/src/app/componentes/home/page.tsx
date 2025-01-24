'use client'
import { useState } from "react";
import style from "./home.module.css";
import Usuario from "@/app/interfaces/usuario";
import React from 'react';
import Header from "../header/header";


export default function Home() {

  return (
    <div>
      <Header/>
      <div className={style.fundoConteudo}>
        <div className={style.conteudoSite}>
          <h1 className={style.tituloHome}>Programação e Tecnologias para Aplicações Cliente 4</h1>
          <h1 className={style.tituloHome}>+</h1>
          <h1 className={style.tituloHome}>Programação e Tecnologias para Aplicações Servidores 3</h1>
        </div>
      </div>
    </div>
  );
}
