'use client'
import Usuario from "../interfaces/usuario";
import { useState } from "react";

export default function Perfil(){
    
    const [usuario, setUsuario] = useState<Usuario>({
        id: 1,
        nome: 'Godoy Josefa',
        email: 'godoytrambiqueira@gmail.com',
        password: 'godoycaralho',
        tipo: 'adm'
    })

    return(
        <div>
            <h1>Perfil Usuário</h1>
            <p>Nome: {usuario.nome}</p>
            <p>E-mail: {usuario.email}</p>
            <p>Tipo {usuario.tipo}</p>
        </div>
    )
}