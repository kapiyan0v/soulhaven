import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './profile.css';
import logo from '../../assets/img/soulhaven.png'

import iconCabinet from '../../assets/icons/cabinet.svg';
import iconProfile from '../../assets/icons/profile.svg';

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

const ProfileLayout = () => {
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
      <main className="profile-main">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout; 