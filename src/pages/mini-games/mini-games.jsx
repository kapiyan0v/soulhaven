import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

export const MiniGames = () => {
    return (
        <div className="mini-games-container">
            <h1 className="mini-games-title">Мини-игры</h1>
            <div className="games-grid">
                <Link to="/mini-games/snake" className="game-card">
                    <h2>Змейка</h2>
                    <p>Классическая игра "Змейка". Управляйте змейкой, собирайте еду и старайтесь не врезаться в стены!</p>
                </Link>
                <Link to="/mini-games/puzzle" className="game-card">
                    <h2>Пазл</h2>
                    <p>Соберите пазл, перемещая плитки и восстанавливая изображение.</p>
                </Link>
                <Link to="/mini-games/breathing-bubbles" className="game-card">
                    <h2>Дыхательные пузыри</h2>
                    <p>Антистресс-игра, в которой вы лопаете пузыри в ритме дыхания. Это помогает замедлиться, расслабиться и улучшить концентрацию.</p>
                </Link>
                <Link to="/mini-games/mandala-coloring" className="game-card">
                    <h2>Творческая медитация</h2>
                    <p>Раскрашивайте мандалу, выбирая цвета и сложность под свое настроение. Идеальный способ снять напряжение и выразить себя.</p>
                </Link>
                <Link to="/mini-games/positive-thinking" className="game-card">
                    <h2>Тренировка позитивного мышления</h2>
                    <p>Из предложенных слов составьте вдохновляющие фразы, которые помогут вам настроиться на гармонию и уверенность.</p>
                </Link>
                <Link to="/mini-games/breathing-firefly" className="game-card">
                    <h2>Осознанное дыхание</h2>
                    <p>Следите за мягким свечением светлячка и дышите в такт его движению, чтобы вернуть себе ощущение спокойствия.</p>
                </Link>
            </div>
        </div>
    );
};
