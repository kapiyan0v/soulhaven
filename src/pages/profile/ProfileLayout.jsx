import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './profile.css';

const sidebarLinks = [
  { to: '/profile', label: 'Профиль', icon: '👤' },
  { to: '/profile/achievements', label: 'Достижения', icon: '🏆' },
  { to: '/profile/calendar', label: 'Календарь', icon: '📅' },
  { to: '/profile/privacy', label: 'Конфиденциальность', icon: '📄' },
  { to: '/profile/settings', label: 'Настройки', icon: '⚙️' },
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
                <Link to={link.to}><span className="profile-nav-icon">{link.icon}</span>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="profile-chatbot">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="chatbot" />
          <button className="chat-btn">Начать чат</button>
          <div className="chat-support">Поддержка 24/7</div>
        </div>
      </aside>
      <main className="profile-main">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout; 