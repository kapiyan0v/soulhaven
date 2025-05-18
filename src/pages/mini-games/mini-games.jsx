import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

export const MiniGames = () => {
    return (
        <section className="minigames">
                <h1 className="section-title">Мини-игры</h1>

                <div className="mini-games-container">
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
                                    Расслабляющая игра, в которой вы собираете пазлы с живописными природными видами.
                                    Завершая изображение, вы погружаетесь в атмосферу умиротворения и покоя.
                                </p>
                                <button onClick={() => navigate('/mini-games/puzzle')} className="start-button">Начать игру</button>
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
                                    Творческая медитация, где вы выбираете цвета и раскрашиваете мандалу, подстраивая
                                    сложность под свое настроение. Идеальный способ снять напряжение и выразить себя.
                                </p>
                                <button onClick={() => navigate('/mini-games/mandala-coloring')} className="start-button">Начать игру</button>
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
                                    Антистресс-игра, в которой вы лопаете пузыри в ритме дыхания. Это помогает
                                    замедлиться, расслабиться и улучшить концентрацию.
                                </p>
                                <button onClick={() => navigate('/mini-games/breathing-bubbles')} className="start-button">Начать игру</button>
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
                                    Игра для осознанного дыхания. Следите за мягким свечением светлячка и дышите в такт
                                    его движению, чтобы вернуть себе ощущение спокойствия.
                                </p>
                                <button onClick={() => navigate('/mini-games/breathing-firefly')} className="start-button">Начать игру</button>
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
                                    Тренировка позитивного мышления. Из предложенных слов составьте вдохновляющие фразы,
                                    которые помогут вам настроиться на гармонию и уверенность.
                                </p>
                                <button onClick={() => navigate('/mini-games/positive-thinking')} className="start-button">Начать игру</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
