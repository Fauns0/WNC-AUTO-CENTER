import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AgendarManutencao.css';
import logo from '../Img/Logo.png';
import GoogleIcone from '../Img/GoogleIcone.png';

function AgendarManutencao() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceInput, setServiceInput] = useState('');
  const availableServices = ['Revisão', 'Troca de óleo', 'Freios', 'Analisar Veículo'];
  const addService = (event) => {
    const value = event.target.value;
    if (value && !selectedServices.includes(value)) {
      setSelectedServices([...selectedServices, value]);
    }
    setServiceInput(''); 
  };
  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="agendar-manutencao">
      <header className="header-agendar">
        <img src={logo} alt="WNC Auto Center" className="logo-agendar" />
        <h1 className="title-agendar">WNC AUTO CENTER</h1>
      </header>

      <div className="form-container">
        <form className="form">
          <label htmlFor="nome" className="form-label">
            <span className="required">*</span> Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Completo"
            className="form-input"
          />

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
            <button type="button" className="google-button">
              <img src={GoogleIcone} alt="Google Icon" className="google-icon" />
            </button>
          </div>

          <label htmlFor="servico" className="form-label">
            <span className="required">*</span> Serviço:
          </label>
          <select
            id="servico"
            name="servico"
            className="form-input"
            value={serviceInput}
            onChange={addService}
          >
            <option value="">Selecionar</option>
            {availableServices.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <div className="selected-services">
            {selectedServices.map((service, index) => (
              <div key={index} className="service-chip">
                {service}
                <button
                  type="button"
                  className="remove-service"
                  onClick={() => removeService(service)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <label htmlFor="descricao" className="form-label">
            Descrição do Problema (opcional):
          </label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Digite aqui"
            className="form-textarea"
            maxLength="100"
          ></textarea>
          <div className="char-count">0 / 100</div>

          <div className="buttons">
            <button onClick={handleBack} type="button" className="button back-button">
              Voltar
            </button>
            <button type="submit" className="button submit-button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgendarManutencao;
