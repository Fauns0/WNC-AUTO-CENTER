import React from 'react';
import '../CSS/ConsultarAgendamento.css';
import logo from '../Img/Logo.png';
import GoogleIcone from '../Img/GoogleIcone.png';

function ConsultarAgendamento({ onBack }) {
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
          <button onClick={onBack} type="button" className="button back-button">
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
