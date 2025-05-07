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
    <div className="footer-wave">
      <svg className="wave-svg wave1" viewBox="0 0 1726 185" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fillOpacity="0.4"/>
      </svg>
      <svg className="wave-svg wave2" viewBox="0 0 1728 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.07805 30.1909C-89.1075 -18.1606 -202.029 10.0444 -247.092 30.1909V129H1393.11H1730.84V30.1909C1645.91 -6.29485 1491.98 -11.7344 1372.56 30.1909C1277.01 63.7312 1135.2 44.166 1076.23 30.1909C953.91 -11.2819 842.845 12.9106 802.603 30.1909C741.635 48.6349 595.845 74.4564 500.418 30.1909C404.991 -14.0746 291.009 11.7469 245.946 30.1909C202.651 50.3374 93.2636 78.5425 2.07805 30.1909Z" fill="#AAE6FF" fillOpacity="0.44"/>
      </svg>
      <svg className="wave-svg wave3" viewBox="0 0 1728 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M280.756 37.6632C167.439 -22.691 27.1114 12.5156 -28.8879 37.6632V161H2009.4H2429.09V37.6632C2323.55 -7.8797 2132.26 -14.6695 1983.85 37.6632C1865.12 79.5293 1688.88 55.1074 1615.61 37.6632C1463.6 -14.1047 1325.58 16.0932 1275.57 37.6632C1199.8 60.6856 1018.63 92.917 900.043 37.6632C781.456 -17.5907 639.81 14.6407 583.811 37.6632C530.008 62.8107 394.072 98.0173 280.756 37.6632Z" fill="#AAE6FF" fillOpacity="0.29"/>
      </svg>
    </div>
  </footer>
);

export default Footer; 