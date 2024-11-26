import React from 'react';
import logo from '../Img/Logo.png';
import '../CSS/Header.css';

function Header({ navigateTo, currentPage }) {
  const scrollToTop = () => {
    navigateTo('home'); // Navega para a página inicial
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente até o topo
  };

  const scrollToSection = (id) => {
    if (currentPage !== 'home') {
      // Se não estiver na página inicial, navega para 'home' primeiro
      navigateTo('home');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Aguarda a renderização da página inicial antes de rolar
    } else {
      // Se já estiver na página inicial, apenas rola para a seção
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div
        className="header-logo"
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }}
      >
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>
      <nav className="header-nav">
        <button onClick={() => navigateTo('consultar-agendamento')} className="nav-link">
          Consultar Agendamento
        </button>
        <button onClick={() => scrollToSection('funcionamento')} className="nav-link">
          Funcionamento
        </button>
        <button onClick={() => scrollToSection('mecanicos')} className="nav-link">
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
