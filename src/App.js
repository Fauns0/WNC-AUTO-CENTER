import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuemSomos from './components/QuemSomos';
import PQNossaOficina from './components/PQNossaOficina';
import Localizacao from './components/Localizacao';
import Servico from './components/Servico';
import FazerAgendamento from './components/FazerAgendamento';
import HorarioFuncionamento from './components/HorarioFuncionamento';
import Contato from './components/Contato';
import Mecanicos from './components/Mecanicos';
import ConsultarAgendamento from './components/ConsultarAgendamento';
import AgendarManutencao from './components/AgendarManutencao';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página Inicial com todas as seções */}
        <Route
          path="/"
          element={
            <>
              <br/><br/><br/><br/><br/><br/><br/>
              <QuemSomos />
              <br/><br/><br/>
              <PQNossaOficina />
              <br/><br/><br/><br/>
              <Localizacao />
              <br/><br/><br/>
              <Servico />
              <FazerAgendamento />
              <HorarioFuncionamento />
              <Contato />
              <Mecanicos />
            </>
          }
        />

        {/* Página para Consultar Agendamento */}
        <Route path="/consultar-agendamento" element={<ConsultarAgendamento />} />
        <Route path="/agendar-manutencao" element={<AgendarManutencao />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
