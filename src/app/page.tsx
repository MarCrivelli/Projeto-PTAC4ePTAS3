import Image from "next/image";
import style from "./page.module.css";
import Login from "./componentes/paginaLogin/login";
import Perfil from "./perfil/page";

export default function Home() {
  return (
    <div>
        <Login/>
        <Perfil/>
    </div>
  );
}
