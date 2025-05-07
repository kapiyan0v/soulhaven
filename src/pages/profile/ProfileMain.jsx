import React from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import './profile.css';

const ProfileMain = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <div style={{textAlign: 'center', marginTop: 60, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(51,156,204,0.10)', padding: 40}}>
        <h2 style={{color: '#339CCC', marginBottom: 16}}>Войдите или зарегистрируйтесь</h2>
        <p style={{marginBottom: 24}}>Чтобы пользоваться личным кабинетом, пожалуйста, <Link to="/login" style={{color: '#339CCC', textDecoration: 'underline'}}>войдите</Link> или <Link to="/register" style={{color: '#339CCC', textDecoration: 'underline'}}>зарегистрируйтесь</Link>.</p>
      </div>
    );
  }
  return (
    <div className="profile-main-content">
      <div className="profile-main-top">
        <div className="profile-greeting">
          <div className="greeting-text">
            <h2>Привет!</h2>
            <p>Это твой личный кабинет заботы о себе.<br />
              Здесь собраны лучшие практики для спокойствия ума, внутренней гармонии и укрепления тела.<br />
              Начнём вместе путь к твоему лучшему самочувствию!</p>
          </div>
          <div className="greeting-illustration">
            <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="greeting" />
          </div>
        </div>
        <div className="profile-calendar-card">
          <div className="calendar-header">Февраль 2025</div>
          <div className="calendar-grid">
            {/* Simple static calendar for illustration */}
            <div className="calendar-row calendar-days">
              <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
            </div>
            {[...Array(5)].map((_, i) => (
              <div className="calendar-row" key={i}>
                {[...Array(7)].map((_, j) => (
                  <span key={j} className={i === 1 && j === 1 ? 'calendar-active' : ''}>{i * 7 + j + 1 <= 29 ? i * 7 + j + 1 : ''}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="profile-progress-row">
        <div className="profile-progress-card done">
          <div className="progress-title">Осознанное дыхание</div>
          <div className="progress-desc">Техники для быстрого расслабления</div>
          <div className="progress-value">100%</div>
        </div>
        <div className="profile-progress-card">
          <div className="progress-title">Йога для гармонии</div>
          <div className="progress-desc">Поддержка баланса и расслабление</div>
          <div className="progress-value">0%</div>
        </div>
        <div className="profile-progress-card">
          <div className="progress-title">Путь к позитиву</div>
          <div className="progress-desc">Укрепление уверенности и радости в жизни</div>
          <div className="progress-value">0%</div>
        </div>
        <div className="profile-progress-card">
          <div className="progress-title">Управление тревожностью</div>
          <div className="progress-desc">Стратегия снижения стресса</div>
          <div className="progress-value">0%</div>
        </div>
      </div>
      <div className="profile-bottom-row">
        <div className="profile-tip-card">
          <div className="tip-title">Совет дня</div>
          <div className="tip-content">
            Когда тревога накатывает, попробуйте задать себе три вопроса:<br />
            1. Что самое худшее может случиться?<br />
            2. Насколько это вероятно?<br />
            3. Что я могу сделать прямо сейчас, чтобы помочь себе?<br /><br />
            <b>Часто тревожные мысли преувеличивают опасность.</b> Разбор ситуации логически помогает вернуть контроль и снизить уровень стресса.
          </div>
          <img className="tip-img" src="https://cdn-icons-png.flaticon.com/512/2909/2909769.png" alt="yoga" />
        </div>
        <div className="profile-user-card">
          <div className="user-avatar">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
          </div>
          <div className="user-level-row">
            <span>Уровень 1</span>
            <div className="user-level-bar"><div className="user-level-bar-fill" style={{width: '81%'}}></div></div>
            <span className="user-level-xp">810/1000</span>
            <span className="user-level-star">★</span>
          </div>
          <div className="user-info-row">25лет<br />123456@mail.com</div>
          <div className="user-nick">@123456</div>
        </div>
        <div className="profile-history-card">
          <div className="history-title">Моя история</div>
          <div className="history-desc">Ознакомься с историей своего пути</div>
          <span className="history-icon">📈</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain; 