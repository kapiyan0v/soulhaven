import React from 'react';
import './profile.css';

const ProfilePrivacy = () => (
  <div style={{maxWidth: 700, margin: '40px auto', padding: 0}}>
    <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(51,156,204,0.08)', padding: '32px 36px', minWidth: 320}}>
      <div style={{color: '#339CCC', fontWeight: 700, fontSize: '2rem', marginBottom: 18}}>
        Политика конфиденциальности SoulHaven
      </div>
      <div style={{color: '#222', fontSize: '1.13rem', marginBottom: 18}}>
        Мы собираем ваши данные (никнейм, email, возраст, аватар, прогресс) для создания аккаунта, отображения достижений, статистики и улучшения работы платформы.
      </div>
      <ul style={{color: '#222', fontSize: '1.08rem', marginBottom: 18, paddingLeft: 24}}>
        <li>Ваши данные защищены: используем безопасные серверы и шифрование.</li>
        <li>Мы не передаём данные третьим лицам, кроме случаев, предусмотренных законом.</li>
        <li>Вы можете изменить информацию в личном кабинете или удалить аккаунт, написав на <a href="mailto:support@soulhaven.com" style={{color: '#339CCC', textDecoration: 'underline'}}>support@soulhaven.com</a></li>
        <li>Используем файлы cookie для улучшения работы сайта.</li>
      </ul>
      <div style={{color: '#444', fontSize: '1.08rem', marginTop: 32}}>
        Обновления политики публикуем здесь, уведомим о важных изменениях.
      </div>
    </div>
  </div>
);

export default ProfilePrivacy; 