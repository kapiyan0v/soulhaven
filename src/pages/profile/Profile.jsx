import React from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <div style={{textAlign: 'center', marginTop: 40}}>Вы не авторизованы.</div>;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{maxWidth: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(51,156,204,0.10)', padding: 32, textAlign: 'center'}}>
      <h1 style={{color: '#339CCC', marginBottom: 24}}>Профиль</h1>
      <div style={{fontSize: '1.2rem', marginBottom: 16}}><b>Имя пользователя:</b> {user.username}</div>
      <div style={{fontSize: '1.1rem', marginBottom: 32}}><b>Email:</b> {user.email}</div>
      <button onClick={handleLogout} style={{background: '#339CCC', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontSize: '1rem', cursor: 'pointer'}}>Выйти</button>
    </div>
  );
};

export default Profile; 