'use client'
import style from "./home.module.css";
import { useState } from "react";
import Usuario from "@/app/interfaces/usuario";
import { useRouter } from "next/router";
import React from 'react';
import Image from "next/image";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Home() {

  return (
    <div> 
            <Header/>
            <div className={style.conteudoDoSite}>aaaaaaaaaaaaa</div>  
            <Footer/>
    </div>
  );
}