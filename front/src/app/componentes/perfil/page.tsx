"use client";

import { useState, useEffect } from "react";
import Usuario from "../../interfaces/usuario";
import style from "./perfil.module.css";
import Header from "../header/header";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null); // Usuário logado
  const [erro, setErro] = useState<string | null>(null); // Erro ao buscar perfil

  // Função para buscar os dados do perfil do usuário logado
  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Você precisa estar logado para acessar esta página.");
          router.push("/componentes/paginaAutenticacao");
          return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/perfil`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!data.erro) {
          setUsuario(data.usuario); // Atualiza o estado com os dados do usuário
        } else {
          setErro(data.mensagem);
          alert(data.mensagem);
          router.push("/componentes/paginaAutenticacao");
        }
      } catch (error) {
        console.error("Erro ao buscar o perfil:", error);
        setErro("Erro ao buscar perfil.");
        router.push("/componentes/paginaAutenticacao");
      }
    };

    fetchPerfil();
  }, [router]);

  // Função para atualizar o perfil
  const handleAtualizarPerfil = async () => {
    const novoNome = (document.getElementById("inputNome") as HTMLInputElement).value;
    const novoEmail = (document.getElementById("inputEmail") as HTMLInputElement).value;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/perfil`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          usuario: {
            nome: novoNome,
            email: novoEmail,
          },
        }),
      });

      const data = await response.json();
      if (!data.erro) {
        alert("Perfil atualizado com sucesso!");
        setUsuario((prevUsuario) => prevUsuario ? { ...prevUsuario, nome: novoNome, email: novoEmail } : null);
      } else {
        alert(`Erro ao atualizar perfil: ${data.mensagem}`);
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar o perfil.");
    }
  };

  if (erro) return <p className={style.erro}>{erro}</p>;

  return (
    <div className={style.fundoConteudo}>
      <Header />
      <div className={style.conteudoSite}>
        {usuario ? (
          <>
            <div className={style.infoUsuario}>
              <h1 className={style.tituloInfoUsuario}>Perfil Usuário</h1>
              <div className={style.alinharCatEInfo}>
                <strong className={style.categoriaInfo}>Nome:</strong>
                <p className={style.textoInfoUsuario}>{usuario.nome}</p>
              </div>
              <div className={style.alinharCatEInfo}>
                <strong className={style.categoriaInfo}>E-mail:</strong>
                <p className={style.textoInfoUsuario}>{usuario.email}</p>
              </div>
              <div className={style.alinharCatEInfo}>
                <strong className={style.categoriaInfo}>Acesso:</strong>
                <p className={style.textoInfoUsuario}>{usuario.acesso}</p>
              </div>
            </div>
            <div className={style.alterarInfoUsuario}>
              <h1 className={style.tituloInfoUsuario}>Alterar dados</h1>
              <div className={style.alinharCatEInfo}>
                <strong className={style.categoriaAlteracao}>Novo nome:</strong>
                <input className={style.inputAlterar} id="inputNome" type="text" defaultValue={usuario.nome} />
              </div>
              <div className={style.alinharCatEInfo}>
                <strong className={style.categoriaAlteracao}>Novo e-mail:</strong>
                <input className={style.inputAlterar} id="inputEmail" type="email" defaultValue={usuario.email} />
              </div>
              <button className={style.botaoAlterar} onClick={handleAtualizarPerfil}>
                Alterar
              </button>
            </div>
          </>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </div>
    </div>
  );
}
