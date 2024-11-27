import React from 'react';
import '../CSS/Servico.css';

function Servico() {
  return (
    <section className="servico container">
      <h2 className="servico-title">
        Serviços <span className="highlight">Oferecidos</span>
      </h2>
      <p className="servico-description">
        Nossa oficina oferece uma ampla gama de serviços automotivos, garantindo que seu veículo receba o cuidado necessário em todas as etapas. Entre os principais serviços, destacamos:
      </p>
      <div className="servico-cards"> 
        <div className="servico-card featured">
          <h3>Manutenção</h3>
          <ul>
            <li>✔ Sistemas de arrefecimento </li>
            <li>✔ Revisão</li>
            <li>✔ Suspensão</li>
            <li>✔ Freios</li>
            <li>✔ Troca de óleo</li>
            <li>✔ Motor</li>
            <li>✔ Embreagem</li>
          </ul>
          <button className="servico-button">Agendar</button>
        </div>

      </div>
    </section>
  );
}

export default Servico;
