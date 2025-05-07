import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-col about">
        <h3>О нас</h3>
        <p><b>SOULHAVEN —</b><br />
          пространство для восстановления баланса и снижения тревожности. Дышите глубже, расслабьтесь и позаботьтесь о себе вместе с нами.
        </p>
      </div>
      <div className="footer-col nav">
        <h3>Навигация</h3>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/mini-games">Мини-игры</a></li>
          <li><a href="/courses">Курсы</a></li>
          <li><a href="/challenges">Челленджи</a></li>
          <li><a href="/consultations">Консультация</a></li>
          <li><a href="/profile">Личный кабинет</a></li>
        </ul>
      </div>
      <div className="footer-col contacts">
        <h3>Контакты</h3>
        <ul>
          <li><span className="footer-icon">📞</span> +7 (777) 523-13-93<br />+7 (708) 842-39-72</li>
          <li><span className="footer-icon">✉️</span> soulhaven@gmail.com</li>
          <li><span className="footer-icon">📷</span> soulhaven.kz</li>
        </ul>
      </div>
      <div className="footer-col logo">
        <span className="footer-logo">soulhaven</span>
      </div>
    </div>
  </footer>
);

export default Footer; 