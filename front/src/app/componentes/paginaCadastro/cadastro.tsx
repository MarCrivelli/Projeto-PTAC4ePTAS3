'use client'
import Image from "next/image";
import style from "./cadastro.module.css";
import { useState } from "react";
import Usuario from "@/app/interfaces/usuario";
import { useRouter } from "next/router";
import React from 'react';

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
            
    </div>
  );
}