import React from 'react';
import '../CSS/Footer.css';

// Ícone do Instagram como um componente React para facilitar o uso
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.92 7.18C16.92 7.27 16.84 7.35 16.75 7.35H16.74C16.65 7.35 16.57 7.27 16.57 7.18V7.17C16.57 7.08 16.65 7 16.74 7H16.75C16.84 7 16.92 7.08 16.92 7.18V7.18Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15.6C13.9882 15.6 15.6 13.9882 15.6 12C15.6 10.0118 13.9882 8.4 12 8.4C10.0118 8.4 8.4 10.0118 8.4 12C8.4 13.9882 10.0118 15.6 12 15.6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <h4>WNC AUTO CENTER</h4>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-left">
            <span>©2024 WNC Auto Center</span>
          </div>
          <div className="footer-right">
            <span>{'(65) 99232-9866'}</span>
            <a href="mailto:Wncautocenter@gmail.com">Wncautocenter@gmail.com</a>
            <a href="https://www.instagram.com/wnc.auto.center/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;