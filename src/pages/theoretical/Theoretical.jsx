import React from 'react';
import './style.css';

export const Theoretical = () => {
    return (
        <div className="theoretical-container">
            <div className="theoretical-header">
                <h1>Теоретическая часть</h1>
                <p>Изучите основы психологии и самопознания</p>
            </div>

            <div className="theoretical-grid">
                <div className="theory-card">
                    <div className="theory-icon">
                        <i className="fas fa-brain"></i>
                    </div>
                    <h3>Основы психологии</h3>
                    <p>Изучите базовые концепции психологии и их применение в повседневной жизни</p>
                </div>

                <div className="theory-card">
                    <div className="theory-icon">
                        <i className="fas fa-heart"></i>
                    </div>
                    <h3>Эмоциональный интеллект</h3>
                    <p>Научитесь понимать и управлять своими эмоциями</p>
                </div>

                <div className="theory-card">
                    <div className="theory-icon">
                        <i className="fas fa-comments"></i>
                    </div>
                    <h3>Эффективная коммуникация</h3>
                    <p>Улучшите навыки общения и взаимодействия с окружающими</p>
                </div>

                <div className="theory-card">
                    <div className="theory-icon">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h3>Критическое мышление</h3>
                    <p>Развивайте способность анализировать информацию и принимать решения</p>
                </div>
            </div>

            <div className="theory-content">
                <section className="theory-section">
                    <h2>Почему важна теория?</h2>
                    <p>Теоретические знания являются фундаментом для практического применения психологических принципов в жизни. Они помогают лучше понимать себя и окружающих, а также эффективнее решать различные жизненные ситуации.</p>
                </section>

                <section className="theory-section">
                    <h2>Как использовать теорию?</h2>
                    <ul>
                        <li>Регулярно изучайте новые концепции</li>
                        <li>Применяйте знания на практике</li>
                        <li>Ведите дневник наблюдений</li>
                        <li>Обсуждайте изученное с другими</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}; 