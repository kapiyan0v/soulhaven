import './style.css'
import dyhanije from '../../assets/img/dyhanije.png'
import joga from '../../assets/img/joga.png'
import trevoj from '../../assets/img/trevoj.png'
import positiv from '../../assets/img/positiv.png'
import {specialists} from "../../shared/specialists.js";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import Loader from './Loader';
import snake from '../../assets/img/snake.png'

export const Home = () => {
    const navigate = useNavigate();
    const consultationRef = useRef(null);
    const expertsRef = useRef(null);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [logoVisible, setLogoVisible] = useState(true);

    const lessons = [
        {
            stars: "+200 звезд",
            title: "за уровень сложности для гармонии",
            description: "Ознакомьтесь с уровнем сложности для гармонии и узнайте, как поддерживать внутреннее равновесие",
        },
        {
            stars: "+100 звезд",
            title: "за прохождение 3 дыхательных упражнений успешно",
            description: "3 дыхательных упражнения успешно пройдены, чтобы улучшить ваше состояние",
        },
        {
            stars: "+50 звезд",
            title: "сыграть в мини-игру 'Собери нас'",
            description: "Сыграйте в мини-игру 'Собери нас' для развития внимания, расслабления и улучшения настроения",
        },
    ];

    const handleConsultationScroll = () => {
        if (consultationRef.current) {
            consultationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (location.state?.scrollToExperts && expertsRef.current) {
            expertsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) return;
        const interval = setInterval(() => {
            setLogoVisible(v => !v);
        }, 2000);
        return () => clearInterval(interval);
    }, [loading]);

    if (loading) return <Loader logoVisible={logoVisible} />;

    return (
        <>
            <section id="hero" className="hero-section">
                <div className="stars" id="stars"></div>

                <div className="hero-content">
                    <h1 className="hero-title">Добро пожаловать<br/>в SOULHAVEN</h1>
                    <h2 className="hero-subtitle">остров спокойствия в мире хаоса</h2>
                    <p className="hero-description">Здесь вы найдете инструменты для борьбы<br/>с тревожностью,
                        расслабления и самопознания</p>
                    <button className="cta-button" onClick={handleConsultationScroll}>Получить консультацию</button>
                </div>

                <div className="wave-container">
                    <svg className="wave-svg wave1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>
                    <svg className="wave-svg wave2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>

                    <svg className="wave-svg wave3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>

                  
                </div>
            </section>

            <section id="features" className="features-section">
                <h2 className="features-title">SOULHAVEN</h2>
                <p className="features-subtitle">это ваш проводник к спокойствию и гармонии</p>
                <div className="features-cta">Здесь вас ждет:</div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Техники осознанного дыхания для расслабления за считанные минуты</p>
                        </div>
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="#5398c5" stroke-width="2"/>
                            <path d="M12 7V12L15 15" stroke="#5398c5" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Уникальные мини-игры, которые помогут отвлечься и сконцентрироваться</p>
                        </div>
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15 8L21 9L17 14L18 20L12 17.5L6 20L7 14L3 9L9 8L12 2Z" stroke="#5398c5"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Медитации, помогающие снять напряжение и восстановить энергию</p>
                        </div>
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#5398c5" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Курсы, созданные профессионалами для управления тревожностью</p>
                        </div>
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                                stroke="#5398c5" stroke-width="2"/>
                            <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="#5398c5"
                                  stroke-width="2"/>
                        </svg>
                    </div>

                    <div className="feature-card feature-wide">
                        <div className="feature-text">
                            <p>Задания, развивающие навыки саморегуляции и позитивного мышления</p>
                        </div>
                        <svg className="feature-icon" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H21" stroke="#5398c5" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 12H21" stroke="#5398c5" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 19H21" stroke="#5398c5" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>

                <div className="features-wave"></div>
            </section>

            <section className="minigames">
                <h1 className="section-title">Мини-игры</h1>

                <div className="mini-games-container">

                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src={snake}
                                    alt="Пазлы"/>
                            </div>
                            <h3 className="game-title">Змейка</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Классическая игра помогает сосредоточиться на простом действии, отвлекая от тревожных мыслей. Ритмичное движение снижает внутреннее напряжение и стабилизирует эмоциональное состояние.
                                </p>
                                <Link className="start-button" to='/mini-games/snake'>Начать игру</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiBmaWxsPSIjOUJEOEY3IiBzdHJva2U9IiM3QTdBN0EiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIyNiIgeT0iMSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiBmaWxsPSIjRkZFNDRDIiBzdHJva2U9IiM3QTdBN0EiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIxIiB5PSIyNiIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIiBmaWxsPSIjRkY5ODQ4IiBzdHJva2U9IiM3QTdBN0EiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIyNiIgeT0iMjYiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgZmlsbD0iIzVDRDY1QyIgc3Ryb2tlPSIjN0E3QTdBIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+"
                                    alt="Пазлы"/>
                            </div>
                            <h3 className="game-title">Собери пазлы</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Восстановление изображения через сбор плиток тренирует внимание и логическое мышление. Этот процесс успокаивает и возвращает ощущение контроля над происходящим.
                                </p>
                                <Link className="start-button" to='/mini-games/puzzle'>Начать игру</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDUwVjEwSDIwVjUwSDEwWiIgZmlsbD0iI0ZGNDQ0NCIvPgo8cGF0aCBkPSJNMjAgNTBWNUgzMFY1MEgyMFoiIGZpbGw9IiNGRkNDMDAiLz4KPHBhdGggZD0iTTMwIDUwVjBINDBWNTBIMzBaIiBmaWxsPSIjNDRBQUZGIi8+Cjwvc3ZnPg=="
                                    alt="Мандалы"/>
                            </div>
                            <h3 className="game-title">Мандалы</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Раскрашивание мандал расслабляет, активируя творческое мышление. Выбор цветов и уровней сложности помогает выразить внутреннее состояние и восстановить эмоциональный баланс.
                                </p>
                                <Link className="start-button" to='/mini-games/mandala-coloring'>Начать игру</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTAiIGZpbGw9IiM5QkQ4RjciIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjM1IiBjeT0iMjAiIHI9IjciIGZpbGw9IiM5QkQ4RjciIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMzUiIHI9IjUiIGZpbGw9IiM5QkQ4RjciIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg=="
                                    alt="Лопни пузыри"/>
                            </div>
                            <h3 className="game-title">Лопни пузыри</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Игра учит дышать осознанно, следуя мягкому ритму. Такая дыхательная практика снижает уровень стресса и помогает справляться с паникой.
                                </p>
                                <Link className="start-button" to='/mini-games/breathing-bubbles'>Начать игру</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEwSDQwVjQ1SDEwVjEwWiIgZmlsbD0iIzlCRDhGNyIgc3Ryb2tlPSIjMzM5Q0NDIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZD0iTTIwIDVIMzBWMTBIMjBWNVoiIGZpbGw9IiNGRkNDMDAiIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjUiIGZpbGw9IiNGRkNDMDAiLz4KPHBhdGggZD0iTTIyIDMwQzIyIDMwIDIzIDM1IDI1IDM1QzI3IDM1IDI4IDMwIDI4IDMwIiBzdHJva2U9IiMzMzlDQ0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTUgMjBDMTUgMjAgMjAgMjIgMjUgMjJDMzAgMjIgMzUgMjAgMzUgMjAiIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg=="
                                    alt="Следи за светлячком"/>
                            </div>
                            <h3 className="game-title">Следи за светлячком</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Следя за движением светлячка и дыша в заданном ритме, пользователь замедляет дыхание и снижает тревожность. Это упражнение помогает вернуть спокойствие и сосредоточенность.
                                </p>
                                <Link className="start-button" to='/mini-games/breathing-firefly'>Начать игру</Link>
                            </div>
                        </div>
                    </div>

                    <div className="game-card">
                        <div className="game-header">
                            <div className="game-icon">
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTAiIHk9IjM1IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiM2M0M1REEiIHN0cm9rZT0iIzMzOUNDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjMwIiB5PSIzNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNUNENjVDIiBzdHJva2U9IiMzMzlDQ0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0ZGQ0MwMCIgc3Ryb2tlPSIjMzM5Q0NDIiBzdHJva2Utd2lkdGg9IjIiLz4KPHRleHQgeD0iMTIiIHk9IjQzIiBmaWxsPSJibGFjayIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiPkE8L3RleHQ+Cjx0ZXh0IHg9IjMyIiB5PSI0MyIgZmlsbD0iYmxhY2siIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4Ij5DPC90ZXh0Pgo8dGV4dCB4PSIyMiIgeT0iMjgiIGZpbGw9ImJsYWNrIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCI+QjwvdGV4dD4KPC9zdmc+"
                                    alt="Соедини слова"/>
                            </div>
                            <h3 className="game-title">Соедини слова</h3>
                        </div>
                        <div className="game-content">
                            <div className="game-divider"></div>
                            <div className="game-text-content">
                                <p className="game-description">
                                Составление предложений из позитивных фраз тренирует фокус на хорошем. Такая практика способствует формированию устойчивого, поддерживающего внутреннего диалога.
                                </p>
                                <Link className="start-button" to='/mini-games/positive-thinking'>Начать игру</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coursesss">
                <div className="star-background">
                </div>

                <div className="container">
                    <div className="header">
                        <h1 className="title">Наши курсы</h1>
                        <button id="allCoursesBtn" className="all-courses-btn" onClick={() => navigate('/courses')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                    fill="#339CCC"/>
                                <path
                                    d="M12 6C11.45 6 11 6.45 11 7V13C11 13.55 11.45 14 12 14H16C16.55 14 17 13.55 17 13C17 12.45 16.55 12 16 12H13V7C13 6.45 12.55 6 12 6Z"
                                    fill="#339CCC"/>
                            </svg>
                            Посмотреть все курсы
                        </button>
                    </div>

                    <div className="courses-grid">
                        <div className="course-card">
                            <div className="course-image">
                                <img src={dyhanije} alt="Осознанное дыхание"/>
                            </div>
                            <div className="course-info">
                                <h2 className="course-title">Осознанное дыхание</h2>
                                <p className="course-subtitle">Техники для быстрого расслабления</p>
                                <button className="details-btn"  onClick={() => { navigate('/course-start', { state: { courseName: 'Осознанное дыхание' } }); }}>Подробнее</button>
                            </div>
                        </div>

                        <div className="course-card">
                            <div className="course-image">
                                <img src={joga} alt="Йога для гармонии"/>
                            </div>
                            <div className="course-info">
                                <h2 className="course-title">Йога для гармонии</h2>
                                <p className="course-subtitle">Поддержание баланса и расслабления</p>
                                <button className="details-btn" onClick={() => { navigate('/course-start', { state: { courseName: 'Йога для гармонии' } }); }}>Подробнее</button>
                            </div>
                        </div>
                        <div className="course-card">
                            <div className="course-image">
                                <img src={trevoj} alt="Управление тревожностью"/>
                            </div>
                            <div className="course-info">
                                <h2 className="course-title">Управление тревожностью</h2>
                                <p className="course-subtitle">Стратегия снижения стресса</p>
                                <button className="details-btn" onClick={() => { navigate('/course-start', { state: { courseName: 'Управление тревожностью' } }); }}>Подробнее</button>
                            </div>
                        </div>

                        <div className="course-card">
                            <div className="course-image">
                                <img src={positiv} alt="Путь к позитиву"/>
                            </div>
                            <div className="course-info">
                                <h2 className="course-title">Путь к позитиву</h2>
                                <p className="course-subtitle">Укрепление уверенности и радости в жизни</p>
                                <button className="details-btn" onClick={() => { navigate('/course-start', { state: { courseName: 'Путь к позитиву' } }); }}>Подробнее</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='specialists' ref={expertsRef}>
                <h1 className="section-title">Наши эксперты</h1>

                <div className='specialists-cards'>
                    {specialists.map((item, index) => (
                        <div className='specialists-item' key={index}>
                            <img src={item.avatar} alt="#"/>
                            <h3>{item.name}</h3>
                            <p>{item.profile}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="stars-container">
                    <div className="stars-content">
                        <h1 className="stars-title">Актуальные учения</h1>
                        <div className="stars-grid">
                            {lessons.map((lesson, index) => (
                                <div key={index} className="stars-card">
                                    <p className="stars-icon">{lesson.stars}</p>
                                    <h2 className="stars-card-title">{lesson.title}</h2>
                                    <p className="stars-description">{lesson.description}</p>
                                    <button className="stars-button">Подробнее</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="consultation" ref={consultationRef}>
                <div className="consultation-inner">
                    <h3>Записаться на консультацию</h3>
                    <p>Оставьте свои контакты для связи, с Вами свяжутся в скором времени.</p>
                    <div className="consultation-forms">
                        <input type="text" placeholder='Укажите ФИО'/>
                        <input type="text" placeholder='Укажите номер телефона'/>
                    </div>
                </div>
            </section>
        </>
    )
}