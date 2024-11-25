import React from 'react';
import '../CSS/FazerAgendamento.css';
import { useNavigate } from 'react-router-dom';

function FazerAgendamento() {
  const navigate = useNavigate();
  const handlePageNavigation = (path) => {
    navigate(path);
  };
  return (
    <section className="FazerAgendamento">
      <h2>Está esperando o que para fazer o seu agendamento?</h2>
      <p>
        Não perca tempo e garanta já o cuidado que seu veículo merece! Entre em contato conosco e agende seu serviço de forma rápida e prática. Nossa equipe está preparada para atender suas necessidades e oferecer um serviço de excelência. Estamos aguardando por você!
      </p>
      <button
        onClick={() => handlePageNavigation('/agendar-manutencao')}
        className="cta-button"
      >
        Agendar manutenção →
      </button>
    </section>
  );
}

export default FazerAgendamento;
