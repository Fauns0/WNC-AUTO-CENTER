import React from 'react';
import '../CSS/FazerAgendamento.css';

function FazerAgendamento() {
  // Função para abrir o WhatsApp com uma mensagem padrão
  const handleWhatsAppRedirect = () => {
    const numeroDestino = '5565992329866'; // O seu número
    const mensagem = "Olá! Gostaria de agendar uma manutenção."; // Mensagem inicial
    
    const linkWhatsApp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, '_blank');
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
      {/* O botão agora chama a função do WhatsApp */}
      <button onClick={handleWhatsAppRedirect} className="cta-button">
        Agendar manutenção →
      </button>
    </section>
  );
}

export default FazerAgendamento;