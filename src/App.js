import React, { useState } from 'react';
import Header from './components/Header.js';
import QuemSomos from './components/QuemSomos.js';
import PQNossaOficina from './components/PQNossaOficina.js';
import Localizacao from './components/Localizacao.js';
import Servico from './components/Servico.js';
import FazerAgendamento from './components/FazerAgendamento.js';
import AgendarManutencao from './components/AgendarManutencao.js';
import HorarioFuncionamento from './components/HorarioFuncionamento.js';
import Contato from './components/Contato.js';
import Mecanicos from './components/Mecanicos.js';
import Footer from './components/Footer.js';
import './CSS/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const renderContent = () => {
    switch (currentPage) {
      case 'agendar-manutencao':
        return <AgendarManutencao onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <div className="main-content">
            <div className='espacamento1'>
            <QuemSomos />
            </div>
            <div className='espacamento1'>
            <PQNossaOficina />
            </div>
            <div className='espacamento1'>
            <Localizacao />
            </div>
            <div className='espacamento1'>
            <Servico />
            </div>
            <div className='espacamento1'>
            </div>
            <FazerAgendamento navigateTo={(page) => setCurrentPage(page)} />
            <HorarioFuncionamento />
            <Contato />
            <Mecanicos />
            <Footer />  
          </div>
        );
    }
  };

  return (
    <div>
      <Header navigateTo={setCurrentPage} />
      {renderContent()}
    </div>
  );
}

export default App;
