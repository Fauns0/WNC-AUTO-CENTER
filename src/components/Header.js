import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Img/Logo.png';
import '../CSS/Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  // Função para navegar para a página principal
  const goToHome = () => {
    navigate('/');
  };

  // Função para abrir o WhatsApp com uma mensagem padrão
  const handleWhatsAppRedirect = () => {
    const numeroDestino = '5565992329866'; // O seu número
    const mensagem = "Olá! Gostaria de agendar uma manutenção."; // Mensagem inicial
    
    const linkWhatsApp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, '_blank');
    setMenuAberto(false);
  };

  return (
    <header className="header">
      <div className="header-logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Logo da Oficina" className="logo-image" />
        <h1>WNC AUTO CENTER</h1>
      </div>

      <div className="header-right-content">
        {/* Usamos um botão normal que chama a função do WhatsApp */}
        <button onClick={handleWhatsAppRedirect} className="header-button">
          Agendar manutenção →
        </button>
      </div>
    </header>
  );
}

export default Header;