import React from 'react';
import './profile.css';

const achievements = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2583/2583346.png',
    stars: 3,
    title: 'Покоритель мини-игр',
    desc: 'Достиг 1000 очков в игре\n"Лопни пузыри"',
    date: '12.02.2025',
    color: '#D2691E',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2583/2583347.png',
    stars: 4,
    title: 'Челлендж-мастер',
    desc: 'Успешно завершил 10 челленджей подряд без пропусков',
    date: '25.03.2025',
    color: '#2ECC40',
  },
];

const ProfileAchievements = () => (
  <div style={{maxWidth: 1100, margin: '0 auto', padding: '40px 0 0 0'}}>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32}}>
      <div style={{background: '#339CCC', color: '#fff', borderRadius: 18, fontWeight: 700, fontSize: '2rem', padding: '18px 48px', boxShadow: '0 2px 8px rgba(51,156,204,0.10)'}}>
        ★ ★ Ваши награды ★ ★
      </div>
    </div>
    <div style={{display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap'}}>
      {achievements.map((ach, idx) => (
        <div key={idx} style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(51,156,204,0.08)', padding: 32, minWidth: 320, maxWidth: 360, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
            {[...Array(ach.stars)].map((_, i) => (
              <span key={i} style={{color: '#FFD600', fontSize: '1.5rem'}}>★</span>
            ))}
          </div>
          <img src={ach.icon} alt="trophy" style={{width: 100, height: 100, marginBottom: 16}} />
          <div style={{fontWeight: 700, fontSize: '1.2rem', color: '#222', marginBottom: 8, textAlign: 'center'}}>{ach.title}</div>
          <div style={{color: '#888', fontSize: '1.05rem', marginBottom: 8, textAlign: 'center', whiteSpace: 'pre-line'}}>{ach.desc}</div>
          <div style={{color: '#888', fontSize: '0.98rem', textAlign: 'center'}}>Получено: {ach.date}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ProfileAchievements; 