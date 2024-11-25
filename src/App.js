import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rodape from './components/Rodape';
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
        <Route path="/consultar-agendamento" element={<ConsultarAgendamento />} />
        <Route path="/agendar-manutencao" element={<AgendarManutencao />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
