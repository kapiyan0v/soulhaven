import React from 'react';
import './challenges.css';
import { Link, useNavigate } from 'react-router-dom';

const Challenges = () => {
  const navigate = useNavigate();
  return (
    <div className="challenge-main-wrapper">
      <div className="challenge-columns">
        {/* Left column */}
        <div className="challenge-left">
          <h1 className="challenge-title">
            Выполните <span>3 дыхательных упражнения</span>
          </h1>
          <p className="challenge-desc">
            Практикуйте глубокое дыхание для снижения тревожности.<br /><br />
            Попробуйте три техники на выбор: квадратное дыхание, 4-7-8 или диафрагмальное дыхание.
          </p>
          <button className="challenge-start-btn-lg" onClick={() => navigate('/challenges/3-breath')}>Начать</button>
          <div className="challenge-back-link">
            <Link to="/challenges">← Назад</Link>
          </div>
        </div>
        {/* Right column */}
        <div className="challenge-right">
          <div className="challenge-info-card">
            <div className="challenge-info-text">
              <span className="challenge-info-label">Длительность:</span> <span className="challenge-info-value">3 дня</span>
            </div>
            <div className="challenge-info-icon">
              {/* Alarm clock SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="36" r="18" fill="#E6E6FA"/><circle cx="32" cy="36" r="14" fill="#fff"/><path d="M32 36V26" stroke="#7B61FF" strokeWidth="2.5" strokeLinecap="round"/><path d="M32 36L39 39" stroke="#7B61FF" strokeWidth="2.5" strokeLinecap="round"/><ellipse cx="18" cy="18" rx="6" ry="3" fill="#B9AFFF"/><ellipse cx="46" cy="18" rx="6" ry="3" fill="#B9AFFF"/></svg>
            </div>
          </div>
          <div className="challenge-info-card">
            <div className="challenge-info-text">
              <span className="challenge-info-label">Награда:</span> <span className="challenge-info-value">+100 звезд</span>
            </div>
            <div className="challenge-info-icon">
              {/* Star SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><polygon points="32,12 37,28 54,28 40,38 45,54 32,44 19,54 24,38 10,28 27,28" fill="#FFD700" stroke="#E6B800" strokeWidth="2"/><rect x="24" y="54" width="16" height="6" rx="2" fill="#BCA16B"/></svg>
            </div>
          </div>
          <div className="challenge-info-card">
            <div className="challenge-info-text">
              <span className="challenge-info-label blue">Как сделать челлендж эффективнее?</span>
              <span className="challenge-info-tip">Подходите к выполнению осознанно и с интересом!</span>
            </div>
            <div className="challenge-info-icon">
              {/* Chart SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="12" y="44" width="8" height="8" rx="2" fill="#FFB6B6"/><rect x="26" y="36" width="8" height="16" rx="2" fill="#FFD6A5"/><rect x="40" y="28" width="8" height="24" rx="2" fill="#B5EAD7"/><polyline points="12,48 30,40 44,32 52,28" fill="none" stroke="#FF6F91" strokeWidth="3"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges; 