import Image from "next/image";
import style from "./page.module.css";
import Perfil from "./perfil/perfilUsuario";
import Header from "./componentes/header/header";
import Autenticacao from "./componentes/paginaAutenticacao/page"
import Home from "./componentes/home/page"

export default function PaginaBase() {
  return (
    <div>
        <Header/>
        <Autenticacao/>
    </div>
  );
}
