import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/ConsultarAgendamento.css';
import logo from '../Img/Logo.png';
import GoogleIcone from '../Img/GoogleIcone.png';

function ConsultarAgendamento() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/'); 
    setTimeout(() => {
      const section = document.getElementById('quem-somos'); 
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 100); 
  };

  return (
    <div className="consultar-agendamento">
      <header className="header-consultar">
        <img src={logo} alt="WNC Auto Center" className="logo-consultar" />
        <h1 className="title-consultar">WNC AUTO CENTER</h1>
      </header>

      <div className="form-container">
        <form className="form">
          <label htmlFor="email" className="form-label">
            <span className="required">*</span> Email:
          </label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Logar com o Google"
              className="form-input"
            />
           
              <img src={GoogleIcone} alt="Google Icon" className="google-icon" />

          </div>
        </form>

        <div className="buttons">
          <button onClick={handleBack} type="button" className="button back-button">
            Voltar
          </button>
          <button type="submit" className="button submit-button">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsultarAgendamento;
