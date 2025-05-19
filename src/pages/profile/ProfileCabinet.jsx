import React from 'react';
import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import './profile.css';
import person from '../../assets/img/person.svg';
import meditation from "../../assets/img/dyhanije.png";

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

    const courses = [
        {
            title: 'Осознанное дыхание',
            subtitle: 'Техники для быстрого расслабления',
            progress: 0,
        },
        {
            title: 'Йога для гармонии',
            subtitle: 'Поддержка баланса и расслабление',
            progress: 0,
        },
        {
            title: 'Путь к позитиву',
            subtitle: 'Укрепление уверенности и радости в жизни',
            progress: 0,
        },
        {
            title: 'Управление тревожностью',
            subtitle: 'Стратегия снижения стресса',
            progress: 0,
        },
    ];

    return (
        <div className="profile-main-content">
            <div className="profile-main-top">
                <div className="profile-greeting-1">
                    <div className="greeting-text">
                        <h2>Привет!</h2>
                        <p>Это твой личный кабинет заботы о себе.<br />
                            Здесь собраны лучшие практики для спокойствия ума, внутренней гармонии и укрепления тела.<br />
                            Начнём вместе путь к твоему лучшему самочувствию!</p>
                    </div>
                    <div className="greeting-illustration">
                        <img src={person} alt="greeting" />
                    </div>
                </div>
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

            <div className="progress-wrapper">
                <h2 className="progress-heading">Отслеживай свой прогресс</h2>
                <div className="progress-grid">
                    {courses.map((course, index) => (
                        <div key={index} className="progress-card">
                            <div className="progress-text">
                                <h3>{course.title}</h3>
                                <p>{course.subtitle}</p>
                            </div>
                            <div className="progress-circle">
                                {course.progress}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="profile-bottom-row">
                <div className="profile-tip-card">
                    <img src={meditation} alt="Медитация" className='image-cabinet'/>
                    <div className="tip-content">
                        <h3 className="tip-title">Совет дня</h3>
                        <p>
                            Когда тревога накатывает, попробуйте задать себе три вопроса:
                            <br /><br />
                            1. Что самое худшее может случиться?<br />
                            2. Насколько это вероятно?<br />
                            3. Что я могу сделать прямо сейчас, чтобы помочь себе?
                        </p>
                        <p><b>Часто тревожные мысли преувеличивают опасность.</b><br />
                            Разбор ситуации логически помогает вернуть контроль и снизить уровень стресса.</p>
                    </div>
                </div>

                <div className="profile-user-history-column">
                    <div className="profile-user-card">
                        <div className="user-avatar">
                            <img src={meditation} alt="Медитация" className="course-image"/>
                        </div>
                        <div className="user-level-row">
                            <span>Уровень 1</span>
                            <div className="user-level-bar">
                                <div className="user-level-bar-fill" style={{ width: '81%' }}></div>
                            </div>
                            <span className="user-level-xp">810/1000</span>
                            <span className="user-level-star">★</span>
                        </div>
                        <div className="user-info-row">25лет<br />123456@mail.com</div>
                        <div className="user-nick">@123456</div>
                    </div>

                    <Link to="/my-history" style={{ textDecoration: 'none' }}>
                        <div className="profile-history-card">
                            <div className="history-title">Моя история</div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div className="history-desc">Ознакомься с историей своего пути</div>
                                <span className="history-icon">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.5 19.833L40.8403 38.4927C38.6273 40.7057 35.0394 40.7057 32.8264 38.4927L29.5069 35.1733C27.294 32.9603 23.706 32.9603 21.4931 35.1733L8.5 48.1663M59.5 19.833H42.5M59.5 19.833V36.833" stroke="#339CCC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default ProfileMain;