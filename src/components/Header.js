import React from 'react';
import '../CSS/Header.css';
import logo from '../Img/Logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>
      <nav className="header-nav">
        <a href="#agendamento">Consultar agendamento</a>
        <a href="#funcionamento">Funcionamento</a>
        <a href="#mecanicos">Mecânicos</a>
      </nav>
      <a href="#agendar" className="header-button">Agendar manutenção →</a>
    </header>
  );
}

export default Header;
