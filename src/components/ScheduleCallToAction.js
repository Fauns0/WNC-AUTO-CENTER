import React from 'react';
import '../CSS/ScheduleCallToAction.css';

function ScheduleCallToAction() {
  return (
    <section className="schedule-cta">
      <h2>Está esperando o que para fazer o seu agendamento?</h2>
      <p>
        Não perca tempo e garanta já o cuidado que seu veículo merece! Entre em contato conosco e agende seu serviço de forma rápida e prática. Nossa equipe está preparada para atender suas necessidades e oferecer um serviço de excelência. Estamos aguardando por você!
      </p>
      <button className="cta-button">
        Agendar manutenção →
      </button>
    </section>
  );
}

export default ScheduleCallToAction;
