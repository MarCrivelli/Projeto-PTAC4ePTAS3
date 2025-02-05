"use client";

import style from "./reserva.module.css";
import Header from "../header/header";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import Mesa from "../../interfaces/mesa";
import Reserva from "../../interfaces/reserva";
import Usuario from "../../interfaces/usuario";

export default function PagReserva() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("cliente"); // Mini menu
  const [usuarios, setUsuarios] = useState([]); // Usuários carregados do banco
  const [mesas, setMesas] = useState([]); // Mesas carregadas do banco
  const [reservasUsuario, setReservasUsuario] = useState([]); // Reservas do usuário logado
  const [reservaSelecionada, setReservaSelecionada] = useState<any>(null); // Reserva selecionada para cancelamento
  const [erroToken, setErroToken] = useState<boolean>(false); // Estado para rastrear erro de token

  // Função para alternar o estado quando um item do mini menu for clicado
  const handleMiniMenuClick = (categoria: string) => {
    setCategoriaAtiva(categoria);
  };

  // Verifica se o token está disponível
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      if (!erroToken) {
        console.error("Token não encontrado. Faça login novamente.");
        setErroToken(true); // Exibe a mensagem de erro uma única vez
      }
      return null;
    }
    return token;
  };

  // Buscar usuários do banco
  useEffect(() => {
    const fetchUsuarios = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/perfil/todos`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!data.erro) {
          setUsuarios(data.usuarios.map((usuario: any) => ({
            value: usuario.id,
            label: usuario.nome,
          })));
        } else {
          console.error(data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar usuários.");
      }
    };

    fetchUsuarios();
  }, []);

  // Buscar mesas do banco
  useEffect(() => {
    const fetchMesas = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mesa`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!data.erro) {
          setMesas(data.mesas.map((mesa: any) => ({
            value: mesa.id,
            label: mesa.codigo,
          })));
        } else {
          console.error(data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar mesas.");
      }
    };

    fetchMesas();
  }, []);

  // Buscar reservas do usuário logado
  useEffect(() => {
    const fetchReservasUsuario = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!data.erro) {
          setReservasUsuario(data.reservas.map((reserva: any) => ({
            value: reserva.id,
            label: `Mesa ${reserva.mesa.codigo} - ${new Date(reserva.data).toLocaleDateString()}`,
          })));
        } else {
          console.error(data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao buscar reservas.");
      }
    };

    fetchReservasUsuario();
  }, []);

  // Criar uma nova reserva
  const handleCriarReserva = async () => {
    const mesaId = (document.getElementById("numeroMesa") as HTMLInputElement)?.value;
    const numeroPessoas = (document.getElementById("numeroPessoas") as HTMLInputElement)?.value;
    const dataReserva = (document.getElementById("dataReserva") as HTMLInputElement)?.value;

    const token = getToken();
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas/novo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mesaId: mesaId,
          n_pessoas: parseInt(numeroPessoas),
          data: dataReserva,
        }),
      });

      const data = await response.json();
      if (!data.erro) {
        console.log("Reserva criada com sucesso!");
      } else {
        console.error(data.mensagem);
      }
    } catch (error) {
      console.error("Erro ao criar reserva.");
    }
  };

  // Cancelar uma reserva
  const handleCancelarReserva = async () => {
    if (!reservaSelecionada) {
      console.error("Selecione uma reserva para cancelar.");
      return;
    }

    const token = getToken();
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservas`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reservaId: reservaSelecionada.value }),
      });

      const data = await response.json();
      if (!data.erro) {
        console.log("Reserva cancelada com sucesso!");
        setReservaSelecionada(null); // Limpa a seleção
      } else {
        console.error(data.mensagem);
      }
    } catch (error) {
      console.error("Erro ao cancelar reserva.");
    }
  };

  return (
    <div className={style.fundoConteudo}>
      <Header />
      <div className={style.conteudoSite}>
        <div className={style.miniMenu}>
          {/* Mini menu - Cliente */}
          <div
            className={style.itemMiniMenu}
            onClick={() => handleMiniMenuClick("cliente")}
          >
            <img
              src="/usuarios.png"
              className={style.iconeMiniMenu}
              alt="Clientes"
            />
            <p className={style.textoMiniMenu}>Clientes</p>
          </div>

          {/* Mini menu - Mesas */}
          <div
            className={style.itemMiniMenu}
            onClick={() => handleMiniMenuClick("mesa")}
          >
            <img src="/mesa.png" className={style.iconeMiniMenu} alt="Mesas" />
            <p className={style.textoMiniMenu}>Mesas</p>
          </div>

          {/* Mini menu - Reservas */}
          <div
            className={style.itemMiniMenu}
            onClick={() => handleMiniMenuClick("reserva")}
          >
            <img
              src="/reserva.png"
              className={style.iconeMiniMenu}
              alt="Reservas"
            />
            <p className={style.textoMiniMenu}>Reservas</p>
          </div>
        </div>

        <div className={style.conteudoCategorias}>
          {/* Conteúdo de Clientes */}
          {categoriaAtiva === "cliente" && (
            <div className={style.conteudoCategoriaCliente}>
              <h1 className={style.tituloCategoria}>Clientes Cadastrados</h1>
              <Select
                inputId="meuId"
                options={usuarios}
                placeholder="Selecione ou digite um cliente"
              />
              <div className={style.informacoesClientes}>
                <h1 className={style.tituloCategoria}>
                  Informação geral do cliente
                </h1>
                <div className={style.dadosCLiente}>
                  <div className={style.alinharCatEInfo}>
                    <strong className={style.categoriaInfo}>Nome:</strong>
                    <p className={style.textoInfoUsuario}>
                      {/* Nome do cliente */}
                    </p>
                  </div>

                  <div className={style.alinharCatEInfo}>
                    <strong className={style.categoriaInfo}>E-mail:</strong>
                    <p className={style.textoInfoUsuario}>
                      {/* E-mail do cliente */}
                    </p>
                  </div>

                  <div className={style.alinharCatEInfo}>
                    <strong className={style.categoriaInfo}>Acesso:</strong>
                    <p className={style.textoInfoUsuario}>
                      {/* Tipo de acesso */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo de Mesas */}
          {categoriaAtiva === "mesa" && (
            <div className={style.conteudoCategoriaMesa}>
              <h1 className={style.tituloCategoria}>Gerenciamento de mesas</h1>
              <div className={style.utilitariosMesa}>
                <div
                  className={`${style.itemUtilitarios} ${style.itemPequeno}`}
                >
                  <h2>Cadastrar mesa</h2>
                  <input
                    min="1"
                    type="number"
                    placeholder="Número da mesa"
                    className={style.filtroReservaMesa}
                  ></input>
                  <input
                    min="1"
                    type="number"
                    placeholder="Capacidade de clientes"
                    className={style.filtroReservaMesa}
                  ></input>
                  <button>Cadastrar</button>
                </div>
                <div
                  className={`${style.itemUtilitarios} ${style.itemPequeno}`}
                >
                  <h2>Reservar mesa</h2>
                  <Select
                    inputId="meuId"
                    options={mesas}
                    placeholder="Selecione uma mesa"
                    className={style.filtroReservaMesa}
                  />
                  <Select
                    inputId="meuId"
                    isMulti
                    options={usuarios}
                    placeholder="Selecione ou digite um cliente"
                    className={style.filtroReservaMesa}
                  />
                  <input type="date" className={style.filtroReservaMesa} />
                  <button>Reservar</button>
                </div>
                <div className={`${style.itemUtilitarios} ${style.itemGrande}`}>
                  <div className={style.alinharBuscaGrande}>
                    <h2>Buscar mesa</h2>
                    <Select
                      inputId="meuId"
                      options={mesas}
                      placeholder="Selecione uma mesa"
                      className={style.filtroReservaMesa}
                    />
                    <button>Buscar</button>
                  </div>
                  <div className={style.conteudoBuscaMesa}>
                    <h2>Detalhes da mesa</h2>
                    <div className={style.alinharDetalhesMesa}>
                      <div className={style.detalhesMesa}>
                        <strong>Número da mesa:</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Capacidade máxima:</strong>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo de Reservas */}
          {categoriaAtiva === "reserva" && (
            <div className={style.conteudoCategoriaReserva}>
              <h1 className={style.tituloCategoria}>
                Gerenciamento de reservas
              </h1>
              <div className={style.alinharReservas}>
                <div className={style.minhasReservas}>
                  <h2>Minhas reservas</h2>
                  <Select
                    inputId="meuId"
                    options={reservasUsuario}
                    placeholder="Selecione"
                    className={style.filtroReservaMesa}
                  />
                  <div className={style.conteudoReservas}>
                    <h3>Detalhe da reserva</h3>
                    <div className={style.detalheReserva}>
                      <div className={style.detalhesMesa}>
                        <strong>Número da mesa:</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Data marcada:</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Cliente(s) reservado(s):</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Origem de:</strong>
                        <p>{/*nome do usuário que reservou*/}</p>
                      </div>
                      <button
                        className={style.botaoCancelarReserva}
                        onClick={() => handleCancelarReserva(reservaId)}
                      >
                        Cancelar reserva
                      </button>
                    </div>
                  </div>
                </div>
                <div className={style.todasAsReservas}>
                  <h2>Todas as reservas</h2>
                  <Select
                    inputId="meuId"
                    options={setReservaSelecionada}
                    placeholder="Selecione"
                    className={style.filtroReservaMesa}
                  />
                  <div className={style.conteudoReservas}>
                    <h3>Detalhe da reserva</h3>
                    <div className={style.detalheReserva}>
                      <div className={style.detalhesMesa}>
                        <strong>Número da mesa:</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Data marcada:</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Cliente(s) reservado(s):</strong>
                        <p></p>
                      </div>
                      <div className={style.detalhesMesa}>
                        <strong>Origem de:</strong>
                        <p>{/*nome do usuário que reservou*/}</p>
                      </div>
                      <button
                        className={style.botaoCancelarReserva}
                        onClick={() => handleCancelarReserva(reservaId)}
                      >
                        Cancelar reserva
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
