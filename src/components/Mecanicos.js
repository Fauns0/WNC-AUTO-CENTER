import React from 'react';
import '../CSS/Mecanicos.css';
import user1 from '../Img/user1.png'; // Substitua pelo caminho das imagens de usuários
import user2 from '../Img/user2.png';
import user3 from '../Img/user3.png';

function Mecanicos() {
  const testimonials = [
    {
      image: user1,
      text: "“If you haven't tried whitespace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”",
      name: 'Jessie Owner',
      position: 'Founder, XYZ Company',
      rating: 5,
    },
    {
      image: user2,
      text: "“If you haven't tried whitespace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”",
      name: 'Jessie Owner',
      position: 'Founder, XYZ Company',
      rating: 5,
    },
    {
      image: user3,
      text: "“If you haven't tried whitespace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”",
      name: 'Jessie Owner',
      position: 'Founder, XYZ Company',
      rating: 5,
    },
  ];

  return (
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
            <p className="user-rating">{'⭐'.repeat(testimonial.rating)}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
    </section>
  );
}

export default Mecanicos;
