import React from 'react';
import '../CSS/QuemSomos.css';
import oficinaImage from '../Img/Oficina.png'; 
import useScrollAnimation from '../hooks/useScrollAnimation'; 

function QuemSomos() {
  const addToRefs = useScrollAnimation(); 
  return (
    // 3. Adiciona a classe e a ref para ativar a animação
    <section 
      className="QuemSomos container animate-on-scroll" 
      ref={addToRefs}
    >
      <div className="QuemSomos-content">
        <h2>Quem Somos</h2>
        <p>
          Somos uma oficina comprometida em oferecer o melhor serviço automotivo, combinando experiência, inovação e confiança. Nossa equipe é formada por profissionais qualificados, apaixonados por veículos e dedicados a entregar soluções de alta qualidade. Atuamos há anos no mercado, sempre buscando aprimorar nossos processos para garantir um atendimento ágil e eficiente. Valorizamos a transparência, a confiança e o relacionamento duradouro com nossos clientes, trabalhando para manter seus veículos em perfeitas condições. Seja para manutenções preventivas, reparos ou diagnósticos avançados, estamos prontos para cuidar do que é importante para você.
        </p>
      </div>
      <div className="QuemSomos-image">
        <img src={oficinaImage} alt="Imagem da Oficina" />
      </div>
    </section>
  );
}

export default QuemSomos;