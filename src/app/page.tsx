import Image from "next/image";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.conteudoDoSite}>
        <div className={style.CardLogin}>
            <div className={style.itensLogin}>
                <div className={style.inputs}>
                    <label className={style.labelLogin}>Digite seu e-mail</label>
                    <input className={style.email} type="email"/>
                </div>
                <div className={style.inputs}>
                    <label className={style.labelLogin}>Digite sua senha</label>
                    <input className={style.senha} type="password"/>
                </div>
                <a>
                    <button className={style.botaoLogin} type="submit">Fazer login</button>
                </a>
            </div>
        </div>
    </div>
  );
}
