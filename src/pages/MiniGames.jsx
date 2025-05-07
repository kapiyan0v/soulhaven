import { Link } from 'react-router-dom';
import { Snake } from './mini-games/Snake';
import { Puzzle } from './mini-games/Puzzle';
import { BreathingBubbles } from './mini-games/BreathingBubbles';
import '../styles/mini-games.css';

export const MiniGames = () => {
    const games = [
        {
            id: 'snake',
            title: 'Змейка',
            description: 'Классическая игра "Змейка". Управляйте змейкой, собирайте еду и не врезайтесь в стены!',
            path: '/mini-games/snake',
            component: Snake
        },
        {
            id: 'puzzle',
            title: 'Пазл',
            description: 'Соберите картинку из перемешанных кусочков. Перетаскивайте кусочки, чтобы собрать изображение.',
            path: '/mini-games/puzzle',
            component: Puzzle
        },
        {
            id: 'breathing-bubbles',
            title: 'Дыхательные пузыри',
            description: 'Антистресс-игра, в которой вы лопаете пузыри в ритме дыхания. Это помогает замедлиться, расслабиться и улучшить концентрацию.',
            path: '/mini-games/breathing-bubbles',
            component: BreathingBubbles
        }
    ];

    return (
        <div className="mini-games-container">
            <h1 className="mini-games-title">Мини-игры</h1>
            <div className="games-grid">
                {games.map((game) => (
                    <Link to={game.path} key={game.id} className="game-card">
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}; 