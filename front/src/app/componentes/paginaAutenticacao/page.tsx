'use client'
import { useState } from "react";
import style from "./autenticacao.module.css";
import Usuario from "@/app/interfaces/usuario";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Autenticacao() {

  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    email: '',
    password: ''
  });

  // Estado para controlar a presença da classe rightPanelActive
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const alterarNome = (novoNome: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      nome: novoNome
    }));
    console.log(usuario);
  };

  return (
    <div className={style.conteudoDoSite}>
      {/* Adiciona a classe "rightPanelActive" com base no estado */}
      <div className={`${style.container} ${isRightPanelActive ? style.rightPanelActive : ''}`}>
        <div className={`${style.formContainer} ${style.signUpContainer}`}>
          <form className={style.form} action={"#"}>
            <h1 className={style.h1}>Crie sua Conta</h1>
            <div className={style.containerRedesSociais}>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-reddit"></i>
              </a>
            </div>
            <span className={style.span}>ou usar o e-mail para o cadastro</span>
            <input className={style.input} type="text" placeholder="digite seu nome"/>
            <input className={style.input} type="email" placeholder="digite seu e-mail"/>
            <input className={style.input} type="password" placeholder="digite sua senha"/>
            <button className={style.button}>Cadastrar</button>
          </form>
        </div>
        <div className={`${style.formContainer} ${style.signInContainer}`}>
          <form className={style.form} action={"#"}>
            <h1 className={style.h1}>Fazer Login</h1>
            <div className={style.containerRedesSociais}>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className={style.social}>
                <i className="fa-brands fa-reddit"></i>
              </a>
            </div>
            <span className={style.span}>ou usar o e-mail para o cadastro</span>
            <input className={style.input} type="text" placeholder="digite seu nome"/>
            <input className={style.input} type="email" placeholder="digite seu e-mail"/>
            <input className={style.input} type="password" placeholder="digite sua senha"/>
            <a className={style.a} href="#">Esqueceu sua senha?</a>
            <button className={style.button}>Logar</button>
          </form>
        </div>
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
              <h1 className={style.h1}>Bem Vindo De Volta!</h1>
              <p className={style.p}>Para se manter conectado conosco, por favor logue com a sua conta</p>
              <button className={`${style.fantasma} ${style.button}`} onClick={() => setIsRightPanelActive(false)}>Logar</button>
            </div>
            <div className={`${style.overlayPanel} ${style.overlayRight}`}>
              <h1 className={style.h1}>Olá, caro usuário!</h1>
              <p className={style.p}>Crie sua conta e entre nessa jornada conosco.</p>
              <button className={`${style.fantasma} ${style.button}`} onClick={() => setIsRightPanelActive(true)}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
