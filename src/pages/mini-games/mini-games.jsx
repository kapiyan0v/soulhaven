import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';
import snake from '../../assets/img/snake.svg'
import React, { useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import pazly from "../../assets/img/pazly.svg";
import mandaly from "../../assets/img/mandaly.svg";
import bubble from "../../assets/img/bubble.svg";
import fly from "../../assets/img/fly.svg";
import words from "../../assets/img/words.svg";

export const MiniGames = () => {
    const [showModal, setShowModal] = useState(false);

    return (
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
    );
};
