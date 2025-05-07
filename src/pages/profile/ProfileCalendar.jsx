import React from 'react';
import './profile.css';

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = (firstDay.getDay() + 6) % 7; // Monday=0
  for (let i = 0; i < dayOfWeek; i++) week.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    week.push(d);
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

const ProfileCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const matrix = getMonthMatrix(year, month);
  const activeDays = [2, 5, 8, 12, 13, 15, 18, 20, 22, 25, 27]; // Example
  const missedDays = [3, 7, 14]; // Example

  return (
    <div className="calendar-page-layout">
      <div className="calendar-card">
        <div className="calendar-header-row">
          <button className="calendar-arrow" disabled>{'<'}</button>
          <span className="calendar-title">{MONTHS[month]} {year}</span>
          <button className="calendar-arrow" disabled>{'>'}</button>
        </div>
        <div className="calendar-table">
          <div className="calendar-table-row calendar-table-days">
            {DAYS.map(day => <span key={day}>{day}</span>)}
          </div>
          {matrix.map((week, i) => (
            <div className="calendar-table-row" key={i}>
              {week.map((d, j) => {
                const isToday = d === today.getDate();
                const isActive = activeDays.includes(d);
                const isMissed = missedDays.includes(d);
                return (
                  <span
                    key={j}
                    className={
                      'calendar-cell' +
                      (isToday ? ' calendar-today' : '') +
                      (isActive ? ' calendar-active-dot' : '') +
                      (isMissed ? ' calendar-missed' : '')
                    }
                  >
                    {d || ''}
                    {isActive && d && !isToday && <span className="calendar-dot"></span>}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-summary-card">
        <div className="calendar-summary-row">
          Активных дней – <b>18</b> <span role="img" aria-label="smile">😊</span>
        </div>
        <div className="calendar-summary-row">
          Пропусков – <b style={{color:'#FFD600'}}>3</b> <span role="img" aria-label="sad">😞</span>
        </div>
        <button className="calendar-motivation-btn">Ты на пути к победе!</button>
      </div>
    </div>
  );
};

export default ProfileCalendar; 