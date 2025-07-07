import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AgendarManutencao.css';
import logo from '../Img/Logo.png';

function AgendarManutencao() {
  // O estado ainda é útil para controlar os campos, como a máscara de telefone
  const [telefone, setTelefone] = useState('');

  const navigate = useNavigate();

  const handleTelefoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '').substring(0, 11);
    if (input.length > 6) {
      input = input.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (input.length > 2) {
      input = input.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
    } else if (input.length > 0) {
      input = input.replace(/^(\d*)/, '($1');
    }
    setTelefone(input);
  };

  // AQUI ESTÁ A MUDANÇA PRINCIPAL
  const handleSubmit = (event) => {
    event.preventDefault();

    // Criamos um objeto 'FormData' diretamente do formulário
    const form = event.target;
    const data = new FormData(form);

    // Pegamos cada valor pelo seu 'name'
    const nome = data.get('nome');
    const telefoneForm = data.get('telefone');
    const email = data.get('email');
    const modeloCarro = data.get('modeloCarro');
    const descricao = data.get('descricao');
    
    const numeroDestino = '5565992329866';

    const rawMessage = `*Novo Agendamento WNC Auto Center*\n\n` +
                       `*Nome:* ${nome}\n` +
                       `*Telefone:* ${telefoneForm}\n` +
                       `*E-mail:* ${email}\n` +
                       `*Modelo do Carro:* ${modeloCarro}\n\n` +
                       `*Descrição do Problema:*\n${descricao}`;
    
    const encodedMessage = encodeURIComponent(rawMessage);
    const linkWhatsApp = `https://wa.me/${numeroDestino}?text=${encodedMessage}`;
    
    window.open(linkWhatsApp, '_blank');
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
      <div className="agendar-manutencao-page">
        <div className="form-wrapper">
          <header className="form-header">
            <img src={logo} alt="WNC Auto Center" className="logo-form" />
            <h1 className="title-form">Agendar Manutenção</h1>
          </header>

          <form className="form-layout" onSubmit={handleSubmit}>
            {/* Os campos agora só precisam do 'name' para serem identificados */}
            <div className="form-row">
              <label htmlFor="nome" className="form-label"><span className="required">*</span> Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome completo" className="form-input" required />
            </div>

            <div className="form-row">
              <label htmlFor="telefone" className="form-label"><span className="required">*</span> Telefone:</label>
              <input type="tel" id="telefone" name="telefone" value={telefone} onChange={handleTelefoneChange} placeholder="(XX) XXXXX-XXXX" className="form-input" required />
            </div>

            <div className="form-row">
              <label htmlFor="email" className="form-label"><span className="required">*</span> E-mail:</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" className="form-input" required />
            </div>

            <div className="form-row">
              <label htmlFor="modeloCarro" className="form-label"><span className="required">*</span> Modelo do carro:</label>
              <input type="text" id="modeloCarro" name="modeloCarro" placeholder="Ex: Honda Civic 2019" className="form-input" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="descricao" className="form-label">Descrição:</label>
              <textarea id="descricao" name="descricao" placeholder="Descreva o problema ou o serviço desejado" className="form-textarea" maxLength="200"></textarea>
            </div>
            
            <div className="form-row">
              <div className="buttons-container">
                <button onClick={handleVoltar} type="button" className="button back-button">Voltar</button>
                <button type="submit" className="button submit-button">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgendarManutencao;