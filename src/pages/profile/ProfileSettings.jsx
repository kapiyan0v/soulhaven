import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import './profile.css';

const tabs = [
  { label: 'Персональные данные' },
  { label: 'Безопасность' },
  { label: 'Настройки интерфейса' },
  { label: 'Поддержка' },
];

const ProfileSettings = () => {
  const { user, setUser, logout } = useUser();
  const [activeTab, setActiveTab] = useState(0);
  const [editUsername, setEditUsername] = useState(false);
  const [username, setUsername] = useState(user?.username || '');
  const [usernameInput, setUsernameInput] = useState(username);

  const handleUsernameEdit = () => setEditUsername(true);
  const handleUsernameCancel = () => {
    setEditUsername(false);
    setUsernameInput(username);
  };
  const handleUsernameSave = () => {
    setUsername(usernameInput);
    setEditUsername(false);
    setUser && setUser({ ...user, username: usernameInput });
    // Optionally, persist to backend/localStorage here
  };

  const handleLogout = () => {
    logout();
    navigate('/');
};

  return (
    <div style={{maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(51,156,204,0.08)', padding: 0, minHeight: 400, display: 'flex'}}>
      {/* Sidebar */}
      <div style={{minWidth: 210, borderRight: '1px solid #f0f0f0', padding: '32px 0 0 0', display: 'flex', flexDirection: 'column', gap: 0}}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            style={{
              background: idx === activeTab ? '#f6f6f6' : 'none',
              border: 'none',
              outline: 'none',
              fontWeight: idx === activeTab ? 700 : 400,
              fontSize: '1.13rem',
              color: '#222',
              padding: '14px 32px',
              textAlign: 'left',
              borderRadius: idx === activeTab ? '12px 0 0 12px' : 0,
              cursor: 'pointer',
              marginBottom: 2,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Main content */}
      <div style={{flex: 1, padding: '32px 0 0 0', minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        {activeTab === 0 && (
          <div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 420}}>
              {/* Username */}
              <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '0 0 0 0', minHeight: 56}}>
                <div style={{flex: 1, color: '#222', fontSize: '1.08rem'}}>Редактировать никнейм</div>
                {editUsername ? (
                  <>
                    <input
                      value={usernameInput}
                      onChange={e => setUsernameInput(e.target.value)}
                      style={{fontSize: '1.08rem', padding: '6px 10px', borderRadius: 6, border: '1px solid #ccc', marginRight: 8, minWidth: 120}}
                    />
                    <button onClick={handleUsernameSave} style={{marginRight: 4, background: '#339CCC', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 14px', cursor: 'pointer'}}>Сохранить</button>
                    <button onClick={handleUsernameCancel} style={{background: 'none', color: '#888', border: 'none', borderRadius: 6, padding: '6px 10px', cursor: 'pointer'}}>Отмена</button>
                  </>
                ) : (
                  <>
                    <span style={{color: '#888', fontSize: '1.08rem', marginRight: 12}}>{username}</span>
                    <button onClick={handleUsernameEdit} style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888'}}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M14.85 2.85a2.121 2.121 0 0 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Zm2.12 2.12-1.06-1.06a1.121 1.121 0 0 0-1.59 0l-9.5 9.5a1 1 0 0 0-.26.46l-1 4a1 1 0 0 0 1.22 1.22l4-1a1 1 0 0 0 .46-.26l9.5-9.5a1.121 1.121 0 0 0 0-1.59Z" fill="#888"/></svg>
                    </button>
                  </>
                )}
              </div>
              {/* Age */}
              <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', minHeight: 56}}>
                <div style={{flex: 1, color: '#222', fontSize: '1.08rem'}}>Изменить возраст</div>
                <span style={{color: '#888', fontSize: '1.08rem', marginRight: 12}}>{user?.age || ''}</span>
                <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888'}}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M14.85 2.85a2.121 2.121 0 0 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Zm2.12 2.12-1.06-1.06a1.121 1.121 0 0 0-1.59 0l-9.5 9.5a1 1 0 0 0-.26.46l-1 4a1 1 0 0 0 1.22 1.22l4-1a1 1 0 0 0 .46-.26l9.5-9.5a1.121 1.121 0 0 0 0-1.59Z" fill="#888"/></svg>
                </button>
              </div>
              {/* Avatar */}
              <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', minHeight: 56}}>
                <div style={{flex: 1, color: '#222', fontSize: '1.08rem'}}>Сменить аватар</div>
                <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888'}}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M14.85 2.85a2.121 2.121 0 0 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Zm2.12 2.12-1.06-1.06a1.121 1.121 0 0 0-1.59 0l-9.5 9.5a1 1 0 0 0-.26.46l-1 4a1 1 0 0 0 1.22 1.22l4-1a1 1 0 0 0 .46-.26l9.5-9.5a1.121 1.121 0 0 0 0-1.59Z" fill="#888"/></svg>
                </button>
              </div>
              {/* Email */}
              <div style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', minHeight: 56}}>
                <div style={{flex: 1, color: '#222', fontSize: '1.08rem'}}>Изменить email</div>
                <span style={{color: '#888', fontSize: '1.08rem', marginRight: 12}}>{user?.email || ''}</span>
                <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#888'}}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M14.85 2.85a2.121 2.121 0 0 1 3 3l-9.5 9.5-4 1 1-4 9.5-9.5Zm2.12 2.12-1.06-1.06a1.121 1.121 0 0 0-1.59 0l-9.5 9.5a1 1 0 0 0-.26.46l-1 4a1 1 0 0 0 1.22 1.22l4-1a1 1 0 0 0 .46-.26l9.5-9.5a1.121 1.121 0 0 0 0-1.59Z" fill="#888"/></svg>
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Other tabs can be filled as needed */}
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1, padding: '0 32px 32px 0'}}>
          <button onClick={handleLogout} style={{background: '#f6f6f6', color: '#222', border: 'none', borderRadius: 12, padding: '16px 32px', fontSize: '1.13rem', fontWeight: 500, cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.03)'}}>Выйти с этого аккаунта</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings; 