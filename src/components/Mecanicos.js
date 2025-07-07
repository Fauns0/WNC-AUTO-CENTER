import React from 'react';
import '../CSS/Mecanicos.css';
import user1 from '../Img/user1.png';
import user2 from '../Img/user2.png';
import user3 from '../Img/user3.png';
import user4 from '../Img/user4.png';

function Mecanicos() {
  const testimonials = [
    {
      image: user1,
      text: "Nosso objetivo é garantir que seu carro esteja em perfeito estado para o dia a dia. Aqui, trabalhamos com eficiência para resolver qualquer problema de forma prática.",
      name: 'Willian Nunes',
      position: 'Tempo de experiencia: 35 anos',
      rating: 5,
    },
    {
      image: user2,
      text: "Estamos prontos para atender suas necessidades, seja manutenção preventiva ou reparos urgentes. Seu veículo estará pronto dentro do prazo combinado.",
      name: 'Florisvaldo da Silva',
      position: 'Tempo de experiencia: 33 anos',
      rating: 5,
    },
    {
      image: user3,
      text: "Aqui na oficina, priorizamos um atendimento claro e direto, com profissionais qualificados e um ambiente de confiança, nosso objetivo é proporcionar tranquilidade e satisfação a cada cliente.",
      name: 'Adriano Junior',
      position: 'Tempo de experiencia: 12 anos',
      rating: 5,
    },
    {
      image: user4,
      text: "Qualquer problema que seu veículo tiver, estamos prontos para resolver, nossa meta é garantir que você saia daqui satisfeito e com seu veículo funcionando perfeitamente.",
      name: 'Andrei Luis',
      position: 'Tempo de experiencia: 3 anos',
      rating: 5,
    },
  ];

  return (
    // AQUI ESTÁ A CORREÇÃO: O id="mecanicos" foi removido
    <section className="mecanicos">
      <h2 className="mecanicos-title">
        Mecânicos <span className="highlight"> </span>
      </h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="user-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="user-name">{testimonial.name}</p>
            <p className="user-position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mecanicos;