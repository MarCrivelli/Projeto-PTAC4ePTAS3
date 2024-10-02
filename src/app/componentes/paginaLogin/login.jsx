import Image from "next/image";
import style from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Login() {
  return (
    <div className={style.conteudoDoSite}>
        <Header/>        
            <div className={style.cardLogin}>              
                <div className={style.blocoLogin}>
                  <div className={style.conteudoBlocoLogin}> 
                    <h1>Cadastre-se</h1>
                    <div className={style.inputsCadastro}>
                      <label>Digite seu e-mail</label>
                      <input type="email" className={style.inputLogin}></input>
                      <label>Digite sua senha</label>
                      <input type="password" className={style.inputLogin}></input>
                    </div>
                    <button className={style.botaoLogin}>
                      Cadastrar
                    </button>
                  </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}