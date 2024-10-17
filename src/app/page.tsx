import Image from "next/image";
import style from "./page.module.css";
import Login from "./componentes/paginaCadastro/cadastro";
import Perfil from "./perfil/page";

export default function Home() {
  return (
    <div>
        <Login/>
        <Perfil/>
    </div>
  );
}
