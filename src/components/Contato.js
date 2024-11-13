import React from 'react';
import '../CSS/Contato.css';


function Contato() {
  return (
    <section className="contato">
      
      <div className="contato-content">
        <h2>Contato</h2>
        <p>
          Para facilitar a comunicação, disponibilizamos um canal de atendimento local. Basta entrar em contato pelo número <strong>(65) 99232-9866</strong> para esclarecer dúvidas, solicitar informações. Estamos prontos para atender suas necessidades de forma rápida e eficiente. Não hesite em nos contatar!
        </p>
        <a href='https://api.whatsapp.com/send?phone=5565992329866' > <button> Whatssap </button></a>
      </div>
    </section>
  );
}

export default Contato;
