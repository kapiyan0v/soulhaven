import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './profile.css';
import logo from '../../assets/img/soulhaven.png'

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