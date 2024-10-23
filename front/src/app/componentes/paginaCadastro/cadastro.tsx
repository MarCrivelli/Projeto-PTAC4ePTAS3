'use client'
import Image from "next/image";
import style from "./cadastro.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";
import Usuario from "@/app/interfaces/usuario";
import { useRouter } from "next/router";
import React from 'react';
import { FaQuestion } from 'react-icons/fa';

export default function Cadastro() {

  const [email, setEmail] = useState<string>()

  const [senha, setSenha] = useState<string>()

  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    email: '',
    password: ''
  })

  const alterarNome = (novoNome: string) => (
    setUsuario((valoresAnteriores) =>({
      ...valoresAnteriores,
      nome: novoNome
    })),
    console.log(usuario)
  )


  return (
    <div className={style.conteudoDoSite}>
        <Header/>        
            <div className={style.cardLogin}>              
                <div className={style.blocoLogin}>
                  <div className={style.conteudoBlocoLogin}> 
                    <h1>Cadastre-se</h1>
                    <div className={style.inputsCadastro}>
                      <label>Digite seu e-mail</label>
                      <input type="email" className={style.inputLogin}></input>
                      <label>Digite sua senha</label>
                      <input type="password" className={style.inputLogin}></input>
                      <label>Digite seu nome</label>
                      <input type="name" className={style.inputLogin}></input>
                      <div className={style.ajusteAjuda}>
                        <FaQuestion className={style.iconeAjuda} size={24} />
                      </div>
                    </div>
                    <button className={style.botaoLogin}>
                      Cadastrar
                    </button>
                  </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}