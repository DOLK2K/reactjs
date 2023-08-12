import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/home/index.scss';
import App from './pages/home/index.js';
import Media from './pages/media/index.js';
import Tarefas from './pages/tarefas/index.js';
import Alunos from './pages/alunos/index.js';
import Cabecalho from './pages/cabecalho/index.js';
import Secoes from './pages/secoes/index.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Correio from './pages/correio/index.js';
import Sorvete from './pages/sorvete/index.js'
import Sorveteria from './pages/sorveteria/index.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<App/>} />
    <Route path='/media' element = {<Media/>} />
    <Route path='/tarefas' element = {<Tarefas/>} />
    <Route path='/alunos' element = {<Alunos/>} />
    <Route path='/cabecalho' element = {<Cabecalho/>} />
    <Route path='/secoes' element = {<Secoes/>} />
    <Route path='/correio' element = {<Correio/>} />
    <Route path='/sorvete' element = {<Sorvete/>} />
    <Route path='/sorveteria' element = {<Sorveteria/>} />


   
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

