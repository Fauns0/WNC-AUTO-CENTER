import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Header.css';
import logo from '../Img/Logo.png';

function Header() {
  const navigate = useNavigate();

  // Função para redirecionar para a página inicial e rolar para "Quem Somos"
  const handleHomeNavigation = () => {
    navigate('/'); // Redireciona para a página inicial
    setTimeout(() => {
      const section = document.getElementById('quem-somos'); // ID da seção "Quem Somos"
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para a seção
      }
    }, 100); // Aguarda a página inicial carregar antes de rolar
  };

  // Função para redirecionar para uma seção específica
  const handleNavigation = (id) => {
    navigate('/'); // Redireciona para a página inicial
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Função para redirecionar para uma página específica
  const handlePageNavigation = (path) => {
    navigate(path); // Redireciona para a rota especificada
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={handleHomeNavigation} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>
      <nav className="header-nav">
        <button
          onClick={() => handlePageNavigation('/consultar-agendamento')}
          className="nav-link"
        >
          Consultar Agendamento
        </button>
        <button onClick={() => handleNavigation('funcionamento')} className="nav-link">
          Funcionamento
        </button>
        <button onClick={() => handleNavigation('mecanicos')} className="nav-link">
          Mecânicos
        </button>
      </nav>
      <button
        onClick={() => handlePageNavigation('/agendar-manutencao')}
        className="header-button"
      >
        Agendar manutenção →
      </button>
    </header>
  );
}

export default Header;
