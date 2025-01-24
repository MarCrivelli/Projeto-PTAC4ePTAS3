'use client'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Autenticacao from '../componentes/paginaAutenticacao/page';
import Home from '../componentes/home/page';

export default function Rotas() {
    return(
      <BrowserRouter>
          <Routes>
              {/*O "path" é uma indicação do que vai aparecer na URL do navegador*/}
              <Route path='/' element={<Home/>}/>
              <Route path='/autenticar' element={<Autenticacao/>}/>
          </Routes>
      </BrowserRouter>
    );
  }