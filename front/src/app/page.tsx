import Image from "next/image";
import style from "./page.module.css";
import Login from "./componentes/paginaCadastro/cadastro";
import Perfil from "./perfil/perfilUsuario";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer";

export default function Home() {
  return (
    <div>
        <Header/>
        <Login/>
        <Footer/>
    </div>
  );
}
