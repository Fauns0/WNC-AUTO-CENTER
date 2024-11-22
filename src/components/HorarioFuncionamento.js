import React from 'react';
import '../CSS/HorarioFuncionamento.css';
import HorarioFuncionamentoImage from '../Img/H-Funcionamento-img.png'; 

function HorarioFuncionamento() {
  return (
    <section id="funcionamento" className="HorarioFuncionamento container">
      <div className="HorarioFuncionamento-content">
        <h2>Horário de Funcionamento</h2>
        <p>Atendemos de segunda a sexta-feira, das 8h às 18h.</p>
        <p>
          Estamos à disposição durante a semana para oferecer serviços rápidos e eficientes. Para
          agendamentos ou dúvidas, entre em contato conosco por telefone ou faça-nos uma visita.
        </p>
      </div>
      <div className="HorarioFuncionamento-image">
        <img src={HorarioFuncionamentoImage} alt="Imagem de Funcionamento" />
      </div>
    </section>
  );
}

export default HorarioFuncionamento;
