import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';
import snake from '../../assets/img/snake.png'
import React, { useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

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

                <div className="recommendation-btn-wrapper">
                    <button className="recommendation-btn" onClick={() => setShowModal(true)}>
                        <FaCheckCircle className="recommendation-icon" />
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
