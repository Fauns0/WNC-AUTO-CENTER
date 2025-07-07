import React from 'react';
import '../CSS/PQNossaOficina.css';
import PQNossaOficinaImage from '../Img/Boneco.png';

function PQNossaOficina() {
  return (
    // Removido: id, ref, e a classe "animate-on-scroll"
    <section className="PQNossaOficina container">
      <div className="PQNossaOficina-image">
        <img src={PQNossaOficinaImage} alt="Mecânico a trabalhar num carro" />
      </div>
      <div className="PQNossaOficina-content">
        <h2>Por que escolher nossa oficina?</h2>
        <p>Oferecemos um serviço de excelência, com foco total na sua satisfação e segurança.</p>
        <ul className="PQNossaOficina-list">
          <li>Equipa especializada e certificada</li>
          <li>Equipamentos de última geração</li>
          <li>Transparência total no orçamento e serviço</li>
          <li>Garantia de qualidade em todas as peças e mão de obra</li>
        </ul>
      </div>
    </section>
  );
}

export default PQNossaOficina;