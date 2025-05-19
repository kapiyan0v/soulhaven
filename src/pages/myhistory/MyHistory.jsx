import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './style.css';
import logo from '../../assets/img/soulhaven.png'

import iconCabinet from '../../assets/icons/cabinet.svg';
import iconProfile from '../../assets/icons/profile.svg';
import calendar from '../../assets/calendar.svg';
import iconAchievements from '../../assets/icons/achievements.svg';
import iconCalendar from '../../assets/icons/calendar.svg';
import iconPrivacy from '../../assets/icons/privacy.svg';
import iconSettings from '../../assets/icons/settings.svg';


const sidebarLinks = [
    { to: '/profile/cabinet', label: 'Личный кабинет', icon: iconCabinet },
    { to: '/profile', label: 'Профиль',icon: iconProfile },
    { to: '/profile/achievements', label: 'Достижения', icon: iconAchievements  },
    { to: '/profile/calendar', label: 'Календарь', icon: iconCalendar },
    { to: '/profile/privacy', label: 'Конфиденциальность', icon: iconPrivacy },
    { to: '/profile/settings', label: 'Настройки', icon: iconSettings},
];

const MyHistory = () => {
    const { user } = useUser();
    const location = useLocation();

    // Only show 'Профиль' if not logged in
    const filteredLinks = user ? sidebarLinks : [sidebarLinks[0]];

    return (
        <div className="profile-layout">
            <aside className="profile-sidebar">
                <div className="profile-sidebar-header">
                    <div className="profile-avatar">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" />
                    </div>
                    <div className="profile-username">{user?.username || 'Гость'}</div>
                </div>
                <nav className="profile-nav">
                    <ul>
                        {filteredLinks.map(link => (
                            <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
                                <Link to={link.to}>
              <span className="profile-nav-icon">
                {link.icon && <img src={link.icon} alt={link.label} />}
              </span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={{marginTop: 'auto', width: '100%', padding: '0 0 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={logo} alt="soulhaven" />
                </div>
            </aside>
            <main className="profile-main dashboard-layout">
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
                        <img src={calendar} alt={'calendar'}></img>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default MyHistory;