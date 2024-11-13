import React from 'react';
import '../CSS/WorkingHours.css';
import workingImage from '../Img/H-Funcionamento-img.png'; // Substitua pelo caminho da sua imagem

function WorkingHours() {
  return (
    <section className="working-hours container">
      <div className="working-content">
        <h2>Horário de Funcionamento</h2>
        <p>Atendemos de segunda a sexta-feira, das 8h às 18h.</p>
        <p>
          Estamos à disposição durante a semana para oferecer serviços rápidos e eficientes. Para
          agendamentos ou dúvidas, entre em contato conosco por telefone ou faça-nos uma visita.
        </p>
      </div>
      <div className="working-image">
        <img src={workingImage} alt="Imagem de Funcionamento" />
      </div>
    </section>
  );
}

export default WorkingHours;
