"use client";
import React, { useState } from "react";
import style from "./autenticacao.module.css";
import Usuario from "@/app/interfaces/usuario";
import Header from "../header/header";
import { useRouter } from "next/navigation";

export default function Autenticacao() {
  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    password: "",
  });

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const alterarNome = (novoNome: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      nome: novoNome,
    }));
  };

  const alterarEmail = (novoEmail: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      email: novoEmail,
    }));
  };

  const alterarSenha = (novaSenha: string) => {
    setUsuario((valoresAnteriores) => ({
      ...valoresAnteriores,
      password: novaSenha,
    }));
  };

  // Função para lidar com o cadastro
  const handleCadastro = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/cadastro`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!data.erro) {
        alert("Usuário cadastrado com sucesso!");
        setIsRightPanelActive(false); // Redireciona para a tela de login
      } else {
        alert(`Erro: ${data.mensagem}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  // Função para lidar com o login
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");
        router.push("/componentes/paginaAutenticacao"); 
      } else {
        alert(`Erro: ${data.mensagem}`);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <div>
      <Header />
      <div className={style.fundoConteudo}>
        <div className={style.conteudoSite}>
          <div
            className={`${style.container} ${
              isRightPanelActive ? style.rightPanelActive : ""
            }`}
          >
            <div className={`${style.formContainer} ${style.signUpContainer}`}>
              <form className={style.form} onSubmit={handleCadastro}>
                <h1 className={style.h1}>Crie sua Conta</h1>
                <input
                  className={style.input}
                  type="text"
                  placeholder="digite seu nome"
                  value={usuario.nome}
                  onChange={(e) => alterarNome(e.target.value)}
                />
                <input
                  className={style.input}
                  type="email"
                  placeholder="digite seu e-mail"
                  value={usuario.email}
                  onChange={(e) => alterarEmail(e.target.value)}
                />
                <input
                  className={style.input}
                  type="password"
                  placeholder="digite sua senha"
                  value={usuario.password}
                  onChange={(e) => alterarSenha(e.target.value)}
                />
                <button className={style.button} type="submit">
                  Cadastrar
                </button>
              </form>
            </div>

            <div className={`${style.formContainer} ${style.signInContainer}`}>
              <form className={style.form} onSubmit={handleLogin}>
                <h1 className={style.h1}>Fazer Login</h1>
                <input
                  className={style.input}
                  type="email"
                  placeholder="digite seu e-mail"
                  value={usuario.email}
                  onChange={(e) => alterarEmail(e.target.value)}
                />
                <input
                  className={style.input}
                  type="password"
                  placeholder="digite sua senha"
                  value={usuario.password}
                  onChange={(e) => alterarSenha(e.target.value)}
                />
                <button className={style.button} type="submit">
                  Logar
                </button>
              </form>
            </div>

            <div className={style.overlayContainer}>
              <div className={style.overlay}>
                
                <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
                  <h1 className={style.h1}>Já tem uma conta?</h1>
                  <p className={style.p}>
                    Logue e fique conosco para se manter atualizado sobre as novidades do nosso site.
                  </p>
                  <button
                    className={`${style.fantasma} ${style.button}`}
                    onClick={() => setIsRightPanelActive(false)}
                  >
                    Logar
                  </button>
                </div>





                <div className={`${style.overlayPanel} ${style.overlayRight}`}>
                  <h1 className={style.h1}>Olá, caro usuário!</h1>
                  <p className={style.p}>
                    Crie sua conta e entre nessa jornada conosco.
                  </p>
                  <button
                    className={`${style.fantasma} ${style.button}`}
                    onClick={() => setIsRightPanelActive(true)}
                  >
                    Cadastrar
                  </button>
                </div>




              </div>
            </div>





          </div>
        </div>
      </div>
    </div>
  );
}
