import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Img/Logo.png';
import '../CSS/Header.css';

function Header() {
  const navigate = useNavigate();

  // Função para voltar para a página principal ao clicar no logo
  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>

      <div className="header-right-content">
        {/* O único botão que fica no header */}
        <Link to="/agendar" className="header-button">
          Agendar manutenção →
        </Link>
      </div>
    </header>
  );
}

export default Header;