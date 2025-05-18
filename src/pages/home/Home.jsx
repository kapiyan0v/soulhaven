import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

import dyhanije from '../../assets/img/dyhanije.png'
import joga from '../../assets/img/joga.png'
import trevoj from '../../assets/img/trevoj.png'
import positiv from '../../assets/img/positiv.png'
import {specialists} from "../../shared/specialists.js";
import Loader from './Loader';
import snake from '../../assets/img/snake.svg';
import pazly from '../../assets/img/pazly.svg';
import mandaly from '../../assets/img/mandaly.svg';
import bubble from '../../assets/img/bubble.svg';
import fly from '../../assets/img/fly.svg';
import words from '../../assets/img/words.svg';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './style.css';
import './adaptive.css'

export const Home = () => {
    const navigate = useNavigate();
    const consultationRef = useRef(null);
    const expertsRef = useRef(null);
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [logoVisible, setLogoVisible] = useState(true);
    const [showLevelModal, setShowLevelModal] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
                        <svg width="60" height="66" viewBox="0 0 60 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.1666 2.25H36.8333M30 22.75V36.4167L36.8333 43.25M57.3333 36.4167C57.3333 51.5125 45.0957 63.75 30 63.75C14.9042 63.75 2.66663 51.5125 2.66663 36.4167C2.66663 21.3209 14.9042 9.08333 30 9.08333C45.0957 9.08333 57.3333 21.3209 57.3333 36.4167Z" stroke="#339CCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Уникальные мини-игры, которые помогут отвлечься и сконцентрироваться</p>
                        </div>
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.3333 71.7501H54.6667M41 71.7501V58.0834M41 58.0834C31.5651 58.0834 23.9167 50.4349 23.9167 41.0001V20.5001M41 58.0834C50.4349 58.0834 58.0833 50.4349 58.0833 41.0001V20.5001M58.0833 20.5001C58.0833 16.7261 55.0239 13.6667 51.25 13.6667H30.75C26.9761 13.6667 23.9167 16.7261 23.9167 20.5001M58.0833 20.5001H63.2083C67.9258 20.5001 71.75 24.3243 71.75 29.0417C71.75 33.7592 67.9258 37.5834 63.2083 37.5834H58.0833M23.9167 20.5001H18.7917C14.0742 20.5001 10.25 24.3243 10.25 29.0417C10.25 33.7592 14.0742 37.5834 18.7917 37.5834H23.9167" stroke="#339CCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Медитации, помогающие снять напряжение и восстановить энергию</p>
                        </div>
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.7297 16.0095C54.1785 14.8874 53.3521 13.6667 52.1435 13.6667H31.9814C31.2461 13.6667 30.5933 14.1373 30.3607 14.8349L21.2496 42.1682C20.8809 43.2744 21.7043 44.4167 22.8703 44.4167H31.9788C33.0902 44.4167 33.9057 45.4612 33.6361 46.5394L28.8293 65.7666C28.4091 67.4475 30.4695 68.6141 31.6946 67.3889L62.0005 37.0831C63.0767 36.0069 62.3144 34.1667 60.7925 34.1667H48.99C47.7815 34.1667 46.955 32.9461 47.4039 31.824L53.7297 16.0095Z" stroke="#339CCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                    <div className="feature-card">
                        <div className="feature-text">
                            <p>Курсы, созданные профессионалами для управления тревожностью</p>
                        </div>
                        <svg width="83" height="82" viewBox="0 0 83 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.5 47.8333V41M41.5 47.8333V54.6667M41.5 47.8333C27.6666 47.8333 13.8333 44.4167 14.0452 37.5833M41.5 47.8333C55.3333 47.8333 69.1667 44.4167 68.9548 37.5833M14.0452 37.5833C13.9096 39.7462 13.8333 42.0484 13.8333 44.4167C13.8333 55.0463 15.3704 64.3472 16.9074 65.6759C18.4444 67.0046 29.2037 68.3333 41.5 68.3333C53.7963 68.3333 64.5555 67.0046 66.0926 65.6759C67.6296 64.3472 69.1666 55.0463 69.1666 44.4167C69.1666 42.0484 69.0904 39.7462 68.9548 37.5833M14.0452 37.5833C14.5182 30.0384 15.7128 24.1901 16.9074 23.1574C18.4444 21.8287 31.125 20.8185 31.125 20.8185M68.9548 37.5833C68.4818 30.0384 67.2872 24.1901 66.0926 23.1574C64.5555 21.8287 51.875 20.8185 51.875 20.8185M31.125 20.8185C34.3116 20.6179 37.8376 20.5 41.5 20.5C45.1624 20.5 48.6884 20.6179 51.875 20.8185M31.125 20.8185V17.0833C31.125 11.0186 36.7873 10.25 41.5 10.25C46.2126 10.25 51.875 11.0186 51.875 17.0833V20.8185" stroke="#339CCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                    <div className="feature-card feature-wide">
                        <div className="feature-text">
                            <p>Задания, развивающие навыки саморегуляции и позитивного мышления</p>
                        </div>
                        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.3333 27.3333H54.6666M27.3333 40.9999H54.6666M27.3333 54.6666H41M11.9583 40.9999C11.9583 18.7916 18.7916 11.9583 41 11.9583C63.2083 11.9583 70.0416 18.7916 70.0416 40.9999C70.0416 63.2082 63.2083 70.0416 41 70.0416C18.7916 70.0416 11.9583 63.2082 11.9583 40.9999Z" stroke="#339CCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
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
                                    src={pazly}
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
                                    src={mandaly}
                                    alt="мандалы"/>
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
                                    src={bubble}
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
                                    src={fly}
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
                                    src={words}
                                    alt="Соедини слов"/>
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
                <div className="recommendation-button-wrapper">
                    <button className="recommendation-button" onClick={() => setShowModal(true)}>
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5417 19.5L22.0833 34.6667L15.4582 28.1667M46.375 26C46.375 36.7696 37.4767 45.5 26.5 45.5C15.5233 45.5 6.625 36.7696 6.625 26C6.625 15.2304 15.5233 6.5 26.5 6.5C37.4767 6.5 46.375 15.2304 46.375 26Z" stroke="#33CC5C" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        Рекомендовано экспертами в сфере психологической поддержки
                    </button>
                </div>
                {showModal && (
                    <div className="recommendation-modal-overlay" onClick={() => setShowModal(false)}>
                        <div className="recommendation-modal" onClick={e => e.stopPropagation()}>
                            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                                <FaTimes />
                            </button>
                            <div className="modal-text">
                                Проверено и одобрено Центром психологического благополучия (при «Akylbaev Research Center» Карагандинского университета им. академика Е.А.Букетова)
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section className="coursesss">
                <div className="star-background">
                </div>

                <div className="container">
                    <div className="header">
                        <h1 className="title">Наши курсы</h1>
                        <button id="allCoursesBtn" className="all-courses-btn" onClick={() => setShowLevelModal(true)}>
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
                        <h1 className="stars-title">Актуальные челленджи</h1>
                        <div className="stars-grid">
                            {lessons.map((lesson, index) => (
                                <div key={index} className="stars-card">
                                    <div className="stars-top">
                                        <p className="stars-icon">{lesson.stars}</p>
                                        <h2 className="stars-card-title">{lesson.title}</h2>
                                    </div>
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

            {showLevelModal && (
                    <div className="recommendation-modal-overlay" onClick={() => setShowLevelModal(false)}>
                        <div className="recommendation-modal" onClick={e => e.stopPropagation()}>
                            <button className="modal-close-btn" onClick={() => setShowLevelModal(false)}>
                                <FaTimes />
                            </button>
                            <div className="modal-text">
                            Просмотр остальных курсов будет доступен только после достижения 10 уровня!
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}