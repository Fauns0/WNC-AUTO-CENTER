import React from 'react';
import '../CSS/WhyChooseUs.css';
import technicianImage from '../Img/Boneco.png'; // Substitua pelo caminho da sua imagem

function WhyChooseUs() {
  return (
    <section className="why-choose-us container">
      <div className="why-image">
        <img src={technicianImage} alt="Técnico da Oficina" />
      </div>
      <div className="why-content">
        <h2>
          Por que Escolher a <span className="highlight">Nossa Oficina?</span>
        </h2>
        <p>
          Nossa oficina se destaca pela qualidade, confiança e compromisso com a
          satisfação do cliente. Contamos com uma equipe de profissionais altamente
          qualificados e experientes, que utilizam as mais modernas tecnologias para
          garantir um serviço rápido e eficiente. Oferecemos uma ampla gama de serviços
          de reparo e manutenção, sempre com preços justos e peças de qualidade. Além
          disso, priorizamos o atendimento personalizado, garantindo que suas
          necessidades sejam atendidas de forma precisa e transparente. Ao escolher
          nossa oficina, você terá a certeza de estar cuidando bem do seu veículo com
          quem realmente entende do assunto.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
