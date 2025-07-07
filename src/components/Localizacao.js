import React from 'react';
import '../CSS/Localizacao.css';
import LocalizacaoImage from '../Img/Localizacao.png'; 

function Localizacao() {
  return (
    // O id foi REMOVIDO daqui
    <section className="Localizacao container">
      <div className="Localizacao-content">
        <h2>Localização</h2>
        <p>
          Nossa oficina está localizada na R. São Domingos - Areão, Cuiabá - MT, 78010-303.
        </p>
        <p>
          De fácil acesso, estamos prontos para receber seu veículo e oferecer os melhores
          serviços automotivos da região. Visite-nos e confira a qualidade de nosso
          atendimento!
        </p>
        <br/> 
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
          <button>Ver no Mapa</button>
        </a>
      </div>
      <div className="Localizacao-image">
        <img src={LocalizacaoImage} alt="Imagem de Localização" />
      </div>
    </section>
  );
}

export default Localizacao;