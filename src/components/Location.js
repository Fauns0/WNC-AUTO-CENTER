import React from 'react';
import '../CSS/Location.css';
import locationImage from '../Img/Location.png'; // Substitua pelo caminho da imagem do técnico ou mapa

function Location() {
  return (
    <section className="location container">
      <div className="location-content">
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
      <div className="location-image">
        <img src={locationImage} alt="Imagem de Localização" />
      </div>
    </section>
  );
}

export default Location;
