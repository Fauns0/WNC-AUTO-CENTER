import React from 'react';
import '../CSS/Localizacao.css';
import LocalizacaoImage from '../Img/Localizacao.png'; 

function Localizacao() {
  return (
    <section className="Localizacao container">
      <div className="Localizacao-content">
        <h2>
          Localização <span className="highlight"> </span>
        </h2>
        <p>
          Nossa oficina está localizada na R. São Domingos - Areão, Cuiabá - MT, 78010-303.
        </p>
        <p>
          De fácil acesso, estamos prontos para receber seu veículo e oferecer os melhores
          serviços automotivos da região. Visite-nos e confira a qualidade de nosso
          atendimento!
        </p>
        <br/> 
        <a href="https://maps.app.goo.gl/QVUjqMbkG21y4kWA7" > <button  > Map</button></a>
      </div>
      <div className="Localizacao-image">
        <img src={LocalizacaoImage} alt="Imagem de Localização" />
      </div>
    </section>
  );
}

export default Localizacao;
