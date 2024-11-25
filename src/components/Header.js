import React from 'react';
import logo from '../Img/Logo.png';
import '../CSS/Header.css';

function Header({ navigateTo }) {
  return (
    <header className="header">
      <div className="header-logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>
      <nav className="header-nav">
        <button onClick={() => navigateTo('consultar-agendamento')} className="nav-link">
          Consultar Agendamento
        </button>
        <button onClick={() => navigateTo('funcionamento')} className="nav-link">
          Funcionamento
        </button>
        <button onClick={() => navigateTo('mecanicos')} className="nav-link">
          Mecânicos
        </button>
      </nav>
      <button onClick={() => navigateTo('agendar-manutencao')} className="header-button">
        Agendar manutenção →
      </button>
    </header>
  );
}

export default Header;
