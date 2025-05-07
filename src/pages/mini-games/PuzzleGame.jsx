import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

const GRID_SIZE = 4;
const TOTAL_TILES = GRID_SIZE * GRID_SIZE;

export const PuzzleGame = () => {
    const [tiles, setTiles] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const initializeGame = () => {
        const numbers = Array.from({ length: TOTAL_TILES - 1 }, (_, i) => i + 1);
        numbers.push(null); // Empty tile
        const shuffled = shuffleArray([...numbers]);
        setTiles(shuffled);
        setMoves(0);
        setGameWon(false);
        setGameStarted(true);
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleTileClick = (index) => {
        if (!gameStarted || gameWon) return;

        const emptyIndex = tiles.indexOf(null);
        const row = Math.floor(index / GRID_SIZE);
        const col = index % GRID_SIZE;
        const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
        const emptyCol = emptyIndex % GRID_SIZE;

        // Check if the clicked tile is adjacent to the empty space
        const isAdjacent = 
            (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
            (Math.abs(col - emptyCol) === 1 && row === emptyRow);

        if (isAdjacent) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
            setTiles(newTiles);
            setMoves(prev => prev + 1);

            // Check if the puzzle is solved
            if (isPuzzleSolved(newTiles)) {
                setGameWon(true);
            }
        }
    };

    const isPuzzleSolved = (currentTiles) => {
        for (let i = 0; i < TOTAL_TILES - 1; i++) {
            if (currentTiles[i] !== i + 1) {
                return false;
            }
        }
        return currentTiles[TOTAL_TILES - 1] === null;
    };

    useEffect(() => {
        initializeGame();
    }, []);

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Пазл</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="puzzle-game-container">
                <div className="puzzle-grid" style={{ 
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 60px)`
                }}>
                    {tiles.map((tile, index) => (
                        <div
                            key={index}
                            className={`puzzle-tile ${tile === null ? 'empty' : ''}`}
                            onClick={() => handleTileClick(index)}
                            style={{
                                cursor: tile === null ? 'default' : 'pointer',
                                backgroundColor: tile === null ? 'transparent' : '#339CCC'
                            }}
                        >
                            {tile}
                        </div>
                    ))}
                </div>
                <div className="game-info">
                    <p className="game-score">Ходы: {moves}</p>
                    {gameWon && (
                        <div className="game-message">
                            <p>Поздравляем! Вы собрали пазл!</p>
                            <button onClick={initializeGame} className="back-button">
                                Играть снова
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}; 