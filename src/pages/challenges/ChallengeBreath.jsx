import React, { useState } from 'react';
import './challenges.css';

const days = [
  {
    label: 'День 1',
    technique: 'Техника 4-7-8',
    description: 'Помогает быстро расслабиться и снизить тревожность за счет замедленного дыхания и задержки воздуха.'
  },
  {
    label: 'День 2',
    technique: 'Квадратное дыхание',
    description: 'Техника равномерного дыхания, которая восстанавливает баланс и улучшает концентрацию.'
  },
  {
    label: 'День 3',
    technique: 'Альтернативное дыхание',
    description: 'Гармонизирует работу нервной системы, снимает напряжение и улучшает самочувствие.'
  }
];

const ChallengeBreath = () => {
  const [checked, setChecked] = useState([false, false, false]);

  const handleCheck = idx => {
    setChecked(c => c.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="challenge-breath-wrapper">
      <div className="challenge-breath-list">
        {days.map((day, idx) => (
          <div className="challenge-breath-row" key={idx}>
            <div className="challenge-breath-day-label">{day.label}</div>
            <div className="challenge-breath-card">
              <div className="challenge-breath-card-content">
                <div className="challenge-breath-technique">{day.technique}</div>
                <div className="challenge-breath-desc">{day.description}</div>
              </div>
              <div className="challenge-breath-stars-bg">
                {/* SVG stars background */}
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                  <g opacity="0.18">
                    <polygon points="10,10 12,16 18,16 13,20 15,26 10,22 5,26 7,20 2,16 8,16" fill="#339CCC"/>
                    <polygon points="60,20 61,23 64,23 62,25 63,28 60,26 57,28 58,25 56,23 59,23" fill="#339CCC"/>
                    <polygon points="110,10 111,13 114,13 112,15 113,18 110,16 107,18 108,15 106,13 109,13" fill="#339CCC"/>
                    <polygon points="90,40 91,43 94,43 92,45 93,48 90,46 87,48 88,45 86,43 89,43" fill="#339CCC"/>
                    <polygon points="30,50 31,53 34,53 32,55 33,58 30,56 27,58 28,55 26,53 29,53" fill="#339CCC"/>
                  </g>
                </svg>
              </div>
              <div className="challenge-breath-checkbox-wrap">
                <input
                  type="checkbox"
                  className="challenge-breath-checkbox"
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="challenge-breath-actions">
        <button className="challenge-breath-learn-btn">Освоить техники</button>
        <button className="challenge-breath-finish-btn">Завершить</button>
      </div>
    </div>
  );
};

export default ChallengeBreath; 