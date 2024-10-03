'use client'
import Usuario from "../interfaces/usuario";
import { useState } from "react";

export default function Perfil(){
    
    const [usuario, setUsuario] = useState<Usuario>({
        nome: 'joão',
        idade: 15,
        email: 'aaaaaaa'
    })
    
    return(
        <div>
            <h1>Perfil Usuário</h1>
            <p>Nome: {usuario.nome}</p>
            <p>Idade: {usuario.idade}</p>
            <p>E-mail: {usuario.email}</p>
        </div>
    )
}