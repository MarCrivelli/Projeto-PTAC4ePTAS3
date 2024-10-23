import Image from "next/image";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
        <h1>Header</h1>
    </div>
  );
}