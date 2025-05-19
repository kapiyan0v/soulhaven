import React from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import './styles.css';
import './newStyle.css';
import person from '../../assets/img/person.svg';
import calendar from "../../assets/calendar.svg";

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
      <div className="top-section">
      <div className="left-column">
        <div className="user-info-card">
          <div className="user-info-top">
            <img className="avatar" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
            <div className="user-meta">
              <div className="nickname">@123456</div>
              <hr style={{border: '1px solid #0000001A'}}></hr>
              <div className="user-details">25лет<br />123456@mail.com</div>
            </div>
            <div className="user-level-block">
              <div className="level-label">Уровень 1 <span className="info-icon">ⓘ</span></div>
              <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div className="level-bar">
                  <div className="level-fill" style={{ width: '20%' }}>
                    <span className="level-progress-text">10/1000</span>
                  </div>
                </div>

                <div className="level-end">★</div>
              </div>

            </div>
          </div>
        </div>
        <h3 className='new-appl'>Новые уведомления</h3>
        <div className="notifications-block">

          <div className="notification-item">
                            <span className="notification-star"><svg width="52" height="49" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26 0L32.0619 18.6565H51.6785L35.8083 30.1869L41.8702 48.8435L26 37.3131L10.1298 48.8435L16.1917 30.1869L0.321474 18.6565H19.9381L26 0Z" fill="#FFFF00"/>
                                    </svg>
                                    </span>
            <div className="notification-text">
              <span className="green-text">+10 звезд</span><br />
              Успешная регистрация на платформе
            </div>
          </div>
        </div>
      </div>

      <div className="calendar-card">
        <div className="calendar-grid">
          <div className="profile-calendar-card">
            <div className="calendar-header">Май 2025</div>
            <div className="calendar-grid">
              {/* Simple static calendar for illustration */}
              <div className="calendar-row calendar-days">
                <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
              </div>
              {[...Array(5)].map((_, i) => (
                  <div className="calendar-row" key={i}>
                    {[...Array(7)].map((_, j) => {
                      const dayNumber = i * 7 + j + 1;
                      return (
                          <span key={j} className={dayNumber === 19 ? 'calendar-active' : ''}>
          {dayNumber <= 31 ? dayNumber : ''}
        </span>
                      );
                    })}
                  </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="profile-progress-row">
        <div className="profile-progress-card done">
          <div className="progress-title">Осознанное дыхание</div>
          <div className="progress-desc">Техники для быстрого расслабления</div>
          <div className="progress-value">0%</div>
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

    </div>
  );
};

export default ProfileMain; 