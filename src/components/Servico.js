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
        <div className="servico-card">
          <h3>Reparos Mecânicos</h3>
          <p className="price">$21.99</p>
          <ul>
            <li>✔ Soluções para problemas no motor</li>
            <li>✔ Suspensão</li>
            <li>✔ Freios</li>
            <li>✔ Câmbio</li>
            <li>✔ Outros sistemas vitais</li>
          </ul>
          <button className="servico-button">Agendar</button>
        </div>
        
        <div className="servico-card featured">
          <h3>Manutenção Preventiva</h3>
          <p className="price">$11.99</p>
          <ul>
            <li>✔ Troca de óleo</li>
            <li>✔ Filtros</li>
            <li>✔ Inspeção de fluidos</li>
            <li>✔ Componentes essenciais para manter o veículo em perfeito estado</li>
          </ul>
          <button className="servico-button">Agendar</button>
        </div>
        
        <div className="servico-card">
          <h3>Serviços de Elétrica</h3>
          <p className="price">$49.99</p>
          <ul>
            <li>✔ Diagnóstico e reparo de sistemas elétricos</li>
            <li>✔ Alternador</li>
            <li>✔ Sistemas de iluminação</li>
            <li>✔ Integridade da bateria</li>
          </ul>
          <button className="servico-button">Agendar</button>
        </div>
      </div>
    </section>
  );
}

export default Servico;
