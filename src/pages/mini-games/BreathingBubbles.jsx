import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

const BUBBLE_COUNT = 15;
const BREATH_DURATION = 4000; // 4 seconds for one breath cycle

export const BreathingBubbles = () => {
    const [bubbles, setBubbles] = useState([]);
    const [isBreathing, setIsBreathing] = useState(false);
    const [breathPhase, setBreathPhase] = useState('inhale'); // 'inhale', 'hold', 'exhale'
    const [score, setScore] = useState(0);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const initializeBubbles = () => {
        const newBubbles = Array.from({ length: BUBBLE_COUNT }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 30 + 20,
            speed: Math.random() * 2 + 1,
            popped: false
        }));
        setBubbles(newBubbles);
    };

    const startBreathing = () => {
        setIsBreathing(true);
        setBreathPhase('inhale');
        initializeBubbles();
    };

    const handleBubbleClick = (index) => {
        if (!isBreathing || bubbles[index].popped) return;

        setBubbles(prev => {
            const newBubbles = [...prev];
            newBubbles[index] = { ...newBubbles[index], popped: true };
            return newBubbles;
        });

        setScore(prev => prev + 1);
    };

    const animateBubbles = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw breathing circle
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = 100;
        let radius;

        switch (breathPhase) {
            case 'inhale':
                radius = maxRadius * (Date.now() % BREATH_DURATION) / BREATH_DURATION;
                break;
            case 'exhale':
                radius = maxRadius * (1 - (Date.now() % BREATH_DURATION) / BREATH_DURATION);
                break;
            default:
                radius = maxRadius;
        }

        // Draw breathing circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 108, 255, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#646cff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw and animate bubbles
        bubbles.forEach((bubble, index) => {
            if (bubble.popped) return;

            // Update bubble position
            const newY = bubble.y - bubble.speed;
            if (newY < -bubble.size) {
                bubble.y = height + bubble.size;
                bubble.x = Math.random() * width;
            } else {
                bubble.y = newY;
            }

            // Draw bubble
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 108, 255, 0.3)';
            ctx.fill();
            ctx.strokeStyle = '#646cff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        animationRef.current = requestAnimationFrame(animateBubbles);
    };

    useEffect(() => {
        if (isBreathing) {
            animateBubbles();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isBreathing, bubbles, breathPhase]);

    useEffect(() => {
        if (!isBreathing) return;

        const breathInterval = setInterval(() => {
            setBreathPhase(prev => {
                switch (prev) {
                    case 'inhale':
                        return 'hold';
                    case 'hold':
                        return 'exhale';
                    case 'exhale':
                        return 'inhale';
                    default:
                        return 'inhale';
                }
            });
        }, BREATH_DURATION);

        return () => clearInterval(breathInterval);
    }, [isBreathing]);

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Дыхательные пузыри</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="breathing-game-container">
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    className="breathing-canvas"
                    onClick={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        
                        bubbles.forEach((bubble, index) => {
                            const dx = x - bubble.x;
                            const dy = y - bubble.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            
                            if (distance < bubble.size) {
                                handleBubbleClick(index);
                            }
                        });
                    }}
                />
                {!isBreathing && (
                    <div className="game-overlay">
                        <div className="game-message">
                            <p>Нажмите, чтобы начать</p>
                            <p className="game-instructions">
                                Лопайте пузыри в ритме дыхания.<br />
                                Вдох - 4 секунды,<br />
                                Задержка - 4 секунды,<br />
                                Выдох - 4 секунды
                            </p>
                            <button onClick={startBreathing} className="back-button">
                                Начать
                            </button>
                        </div>
                    </div>
                )}
                <div className="game-info">
                    <p className="game-score">Счёт: {score}</p>
                    <p className="breath-phase">
                        {breathPhase === 'inhale' && 'Вдох'}
                        {breathPhase === 'hold' && 'Задержка'}
                        {breathPhase === 'exhale' && 'Выдох'}
                    </p>
                </div>
            </div>
        </div>
    );
}; 