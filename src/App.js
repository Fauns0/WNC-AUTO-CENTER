// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// CSS e Componentes
import 'fullpage.js/dist/fullpage.min.css';
import './CSS/App.css';
import Header from './components/Header.js';
import QuemSomos from './components/QuemSomos.js';
import PQNossaOficina from './components/PQNossaOficina.js';
import Localizacao from './components/Localizacao.js';
import Servico from './components/Servico.js';
import FazerAgendamento from './components/FazerAgendamento.js';
import HorarioFuncionamento from './components/HorarioFuncionamento.js';
import Contato from './components/Contato.js';
import Mecanicos from './components/Mecanicos.js';
import Footer from './components/Footer.js';
import AgendarManutencao from './components/AgendarManutencao.js';
import ConsultarAgendamento from './components/ConsultarAgendamento.js';

// Componente APENAS para a página com o efeito Fullpage
const FullpageHome = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000}
    anchors={['quem-somos', 'pq-nossa-oficina', 'localizacao', 'servicos', 'fazer-agendamento', 'horario-funcionamento', 'contato', 'mecanicos', 'footer']}
    paddingTop={'82px'}
    scrollOverflow={true}
    render={() => (
      <ReactFullpage.Wrapper>
        <div className="section"><QuemSomos /></div>
        <div className="section"><PQNossaOficina /></div>
        <div className="section"><Localizacao /></div>
        <div className="section"><Servico /></div>
        <div className="section"><FazerAgendamento /></div>
        <div className="section"><HorarioFuncionamento /></div>
        <div className="section"><Contato /></div>
        <div className="section"><Mecanicos /></div>
        <div className="section fp-auto-height"><Footer /></div>
      </ReactFullpage.Wrapper>
    )}
  />
);

function App() {
  return (
    <div className="App">
      {/* O Header fica fora do Routes para ser visível em todas as páginas */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<FullpageHome />} />
          <Route path="/agendar" element={<div className="conteudo-pagina"><AgendarManutencao /></div>} />
          <Route path="/consultar" element={<div className="conteudo-pagina"><ConsultarAgendamento /></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;