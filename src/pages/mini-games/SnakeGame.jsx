import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

export const SnakeGame = () => {
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [snake, setSnake] = useState([]);
    const [food, setFood] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState('RIGHT');
    const [gameStarted, setGameStarted] = useState(false);

    const initializeGame = () => {
        const initialSnake = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
        setSnake(initialSnake);
        generateFood();
        setDirection('RIGHT');
        setGameOver(false);
        setScore(0);
        setGameStarted(true);
    };

    const generateFood = () => {
        const newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
        setFood(newFood);
    };

    const handleKeyPress = (e) => {
        if (!gameStarted) {
            if (e.key === 'Enter') {
                initializeGame();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') setDirection('UP');
                break;
            case 'ArrowDown':
                if (direction !== 'UP') setDirection('DOWN');
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') setDirection('LEFT');
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') setDirection('RIGHT');
                break;
            default:
                break;
        }
    };

    const moveSnake = () => {
        if (gameOver || !gameStarted) return;

        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
            case 'UP':
                head.y -= 1;
                break;
            case 'DOWN':
                head.y += 1;
                break;
            case 'LEFT':
                head.x -= 1;
                break;
            case 'RIGHT':
                head.x += 1;
                break;
            default:
                break;
        }

        if (
            head.x < 0 ||
            head.x >= GRID_SIZE ||
            head.y < 0 ||
            head.y >= GRID_SIZE ||
            newSnake.some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            setScore(prev => prev + 1);
            generateFood();
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction, gameStarted, gameOver]);

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const gameLoop = setInterval(moveSnake, INITIAL_SPEED);
        return () => clearInterval(gameLoop);
    }, [snake, direction, gameStarted, gameOver]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#4CAF50';
        snake.forEach(segment => {
            ctx.fillRect(
                segment.x * CELL_SIZE,
                segment.y * CELL_SIZE,
                CELL_SIZE - 1,
                CELL_SIZE - 1
            );
        });

        ctx.fillStyle = '#FF5252';
        ctx.fillRect(
            food.x * CELL_SIZE,
            food.y * CELL_SIZE,
            CELL_SIZE - 1,
            CELL_SIZE - 1
        );
    }, [snake, food]);

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Змейка</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="snake-game-container">
                <canvas
                    ref={canvasRef}
                    width={GRID_SIZE * CELL_SIZE}
                    height={GRID_SIZE * CELL_SIZE}
                    className="snake-game-canvas"
                />
                {!gameStarted && (
                    <div className="game-overlay">
                        <div className="game-message">
                            <p>Нажмите Enter для начала игры</p>
                            <p className="game-instructions">Используйте стрелки для управления</p>
                        </div>
                    </div>
                )}
                {gameOver && (
                    <div className="game-overlay">
                        <div className="game-message">
                            <p>Игра окончена!</p>
                            <p>Счёт: {score}</p>
                            <button
                                onClick={initializeGame}
                                className="back-button"
                            >
                                Играть снова
                            </button>
                        </div>
                    </div>
                )}
                <div className="game-score">Счёт: {score}</div>
            </div>
        </div>
    );
}; 