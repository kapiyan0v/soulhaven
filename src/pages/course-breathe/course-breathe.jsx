import './style.css'
import medit from '../../assets/img/medit.png'
import cel from '../../assets/img/cel.png'
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FaBookOpen, FaBrain, FaHands, FaVideo, FaCheckCircle, FaCog, FaLock, FaTimesCircle } from 'react-icons/fa';
import logo from '../../assets/img/soulhaven.png'
import { useUser } from '../../context/UserContext';

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

const sidebarSteps = [
  { label: 'Введение', icon: <FaBookOpen /> },
  { label: 'Теоретическая часть', icon: <FaBrain /> },
  { label: 'Практические техники', icon: <FaHands /> },
  { label: 'Видео - демонстрация', icon: <FaVideo /> },
  { label: 'Финальный тест', icon: <FaCheckCircle /> },
  { label: 'Настройки', icon: <FaCog /> },
];

export const CourseBreathe = () => {
    const location = useLocation();
    const { user } = useUser();
    const courseName = location.state?.courseName || 'Осознанное дыхание';
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const matrix = getMonthMatrix(year, month);
    const activeDays = [2, 5, 8, 12, 13, 15, 18, 20, 22, 25, 27]; // Example
    const missedDays = [3, 7, 14]; // Example

    return (
        <div style={{display: 'flex', background: '#f7fbfd', minHeight: '100vh'}}>
            {/* Sidebar */}
            <aside style={{width: 240, background: '#fff', borderRadius: 18, margin: 24, marginRight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 12px rgba(51,156,204,0.08)'}}>
                <nav style={{width: '100%', marginTop: 32}}>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0, width: '100%'}}>
                        {sidebarSteps.map((step, idx) => (
                            <li key={step.label}>
                                <div style={{display: 'flex', alignItems: 'center', gap: 16, padding: '14px 32px', color: idx === 0 ? '#2563eb' : '#339CCC', fontWeight: idx === 0 ? 700 : 500, background: idx === 0 ? '#e6f4fa' : 'none', borderRadius: idx === 0 ? '12px 0 0 12px' : 0, fontSize: '1.08rem', cursor: 'pointer'}}>
                                    <span style={{fontSize: '1.3em'}}>{step.icon}</span>
                                    {step.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={{marginTop: 'auto', width: '100%', padding: '0 0 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={logo} alt="soulhaven" />
                </div>
            </aside>

            {/* Main Content */}
            <main style={{flex: 1, padding: '32px 32px 32px 32px', maxWidth: 800}}>
                {/* Header */}
                <div style={{background: '#339CCC', color: '#fff', borderRadius: 24, padding: '32px 40px', display: 'flex', alignItems: 'center', marginBottom: 32, boxShadow: '0 2px 8px rgba(51,156,204,0.10)'}}>
                    <div style={{flex: 2}}>
                        <h1 style={{fontSize: '2.1rem', fontWeight: 700, marginBottom: 10, color: '#fff'}}>Курс «{courseName}»</h1>
                        <div style={{fontWeight: 500, fontSize: '1.1rem', marginBottom: 8}}>
                            <span style={{color: '#b3e0fc', fontWeight: 700}}>Дыхание</span> — это больше, чем просто физиологический процесс. Оно напрямую связано с нашим эмоциональным состоянием.
                        </div>
                        <div style={{fontSize: '1.05rem', color: '#e6f4fa'}}>
                            В этом курсе вы освоите эффективные техники дыхания, которые помогут вам чувствовать себя спокойнее, осознаннее и увереннее. Уже после нескольких минут практики вы заметите, как ваше тело расслабляется, а мысли становятся яснее.
                        </div>
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                        <img src={medit} alt="Дыхание" style={{width: 140, height: 140}} />
                    </div>
                </div>

                {/* Steps Grid */}
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32}}>
                    <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'}}>
                        <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#222'}}>Теоретическая часть</div>
                        <div style={{color: '#888', fontSize: '1rem'}}>Как дыхание влияет на тело и разум</div>
                        <div style={{marginLeft: 'auto', color: '#339CCC', fontSize: 28}}><FaTimesCircle /></div>
                    </div>
                    <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'}}>
                        <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#222'}}>Видео - демонстрация</div>
                        <div style={{color: '#888', fontSize: '1rem'}}>Посмотри видео, чтобы узнать больше</div>
                        <div style={{marginLeft: 'auto', color: '#339CCC', fontSize: 28}}><FaTimesCircle /></div>
                    </div>
                    <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'}}>
                        <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#222'}}>Практические техники</div>
                        <div style={{color: '#888', fontSize: '1rem'}}>Техники для быстрого расслабления</div>
                        <div style={{marginLeft: 'auto', color: '#339CCC', fontSize: 28}}><FaTimesCircle /></div>
                    </div>
                    <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'}}>
                        <div style={{fontWeight: 700, fontSize: '1.1rem', color: '#222'}}>Финальный тест</div>
                        <div style={{color: '#888', fontSize: '1rem'}}>Проверь свои знания!</div>
                        <div style={{marginLeft: 'auto', color: '#bbb', fontSize: 28}}><FaLock /></div>
                    </div>
                </div>

                {/* Goal Card */}
                <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 32, display: 'flex', alignItems: 'center', gap: 32, marginBottom: 32}}>
                    <span style={{fontSize: 64, marginRight: 24}}>🧘‍♂️</span>
                    <div>
                        <div style={{fontWeight: 700, fontSize: '1.2rem', color: '#339CCC', marginBottom: 8}}>Цель курса</div>
                        <div style={{fontSize: '1.1rem', color: '#222'}}>Научиться использовать дыхательные техники для управления тревожностью, улучшения самочувствия и повышения осознанности</div>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <div style={{width: 340, display: 'flex', flexDirection: 'column', gap: 24, margin: 24, marginLeft: 0}}>
                {/* Calendar */}
                <div className="calendar-card" style={{background: '#fff', borderRadius: 20, boxShadow: '0 2px 12px rgba(51,156,204,0.08)', padding: '32px 40px', minWidth: 320, maxWidth: 340, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="calendar-header-row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 18}}>
                        <button className="calendar-arrow" disabled>{'<'}</button>
                        <span className="calendar-title">{MONTHS[month]} {year}</span>
                        <button className="calendar-arrow" disabled>{'>'}</button>
                    </div>
                    <div className="calendar-table" style={{width: '100%'}}>
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
                {/* User Card */}
                <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(51,156,204,0.08)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="avatar" style={{width: 80, height: 80, borderRadius: '50%', marginBottom: 8}} />
                    <div style={{width: '100%', marginBottom: 8}}>
                        <div style={{fontWeight: 600, color: '#339CCC', fontSize: '1.1rem'}}>Уровень 1</div>
                        <div style={{background: '#e6f4fa', borderRadius: 4, height: 8, width: '100%', margin: '6px 0', overflow: 'hidden'}}>
                            <div style={{height: '100%', background: '#339CCC', borderRadius: 4, width: '10%'}}></div>
                        </div>
                        <div style={{fontSize: '0.95rem', color: '#339CCC', textAlign: 'right'}}>10/1000 <span style={{color: '#FFD700', fontSize: '1.1rem'}}>★</span></div>
                    </div>
                    <div style={{color: '#213547', fontSize: '0.98rem', textAlign: 'center'}}>{user?.email ? `@${user.email}` : 'Гость'}</div>
                    <div style={{color: '#339CCC', fontSize: '1.05rem', fontWeight: 600}}>{user?.username ? `@${user.username}` : 'Гость'}</div>
                </div>
            </div>
        </div>
    )
}