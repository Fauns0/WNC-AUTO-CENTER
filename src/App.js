import React from 'react';
import Header from './components/Header';
import QuemSomos from './components/QuemSomos';
import PQNossaOficina from './components/PQNossaOficina';
import Localizacao from './components/Localizacao';
import Servico from './components/Servico';
import FazerAgendamento from './components/FazerAgendamento';
import HorarioFuncionamento from './components/HorarioFuncionamento';
import Contato from './components/Contato';
import Mecanicos from './components/Mecanicos';
import Footer from './components/Footer';
import './CSS/App.css';

function App() {
  return (
    <div>
      <Header />
      <br/> <br/> <br/> <br/>
      <QuemSomos />
      <br/> <br/> <br/> <br/>
      <PQNossaOficina />
      <br/> <br/> <br/> <br/>
      <Localizacao />
      <Servico />
      <FazerAgendamento />
      <HorarioFuncionamento />
      <Contato />
      <Mecanicos />
      <Footer />
    </div>
  );
}

export default App;
