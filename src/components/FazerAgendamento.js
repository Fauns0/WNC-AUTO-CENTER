import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importa o useNavigate
import '../CSS/FazerAgendamento.css';

function FazerAgendamento() {
  const navigate = useNavigate(); // 2. Inicializa o hook de navegação

  const handleAgendarClick = () => {
    navigate('/agendar'); // 3. Navega para a rota "/agendar"
  };

  return (
    <section className="FazerAgendamento">
      <h2>Está esperando o que para fazer o seu agendamento?</h2>
      <p>
        Não perca tempo e garanta já o cuidado que seu veículo merece! Entre em
        contato conosco e agende seu serviço de forma rápida e prática. Nossa equipe
        está preparada para atender suas necessidades e oferecer um serviço de
        excelência. Estamos aguardando por você!
      </p>
      {/* 4. O botão agora chama a nova função */}
      <button onClick={handleAgendarClick} className="cta-button">
        Agendar manutenção →
      </button>
    </section>
  );
}

export default FazerAgendamento;