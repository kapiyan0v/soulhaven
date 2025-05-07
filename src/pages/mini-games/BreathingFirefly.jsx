import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

export const BreathingFirefly = () => {
    const [phase, setPhase] = useState('inhale');
    const [score, setScore] = useState(0);
    const canvasRef = useRef(null);
    const [fireflyPosition, setFireflyPosition] = useState({ x: 0, y: 0 });
    const [glowIntensity, setGlowIntensity] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const drawFirefly = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw glow
            const gradient = ctx.createRadialGradient(
                fireflyPosition.x, fireflyPosition.y, 0,
                fireflyPosition.x, fireflyPosition.y, 50 * glowIntensity
            );
            gradient.addColorStop(0, 'rgba(51, 156, 204, 0.8)');
            gradient.addColorStop(1, 'rgba(51, 156, 204, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(fireflyPosition.x, fireflyPosition.y, 50 * glowIntensity, 0, Math.PI * 2);
            ctx.fill();

            // Draw firefly
            ctx.fillStyle = '#339CCC';
            ctx.beginPath();
            ctx.arc(fireflyPosition.x, fireflyPosition.y, 5, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(drawFirefly);
        };

        drawFirefly();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [fireflyPosition, glowIntensity]);

    useEffect(() => {
        const breathingCycle = () => {
            // Inhale phase (4 seconds)
            setPhase('inhale');
            setGlowIntensity(0);
            setTimeout(() => {
                // Hold phase (4 seconds)
                setPhase('hold');
                setGlowIntensity(1);
                setTimeout(() => {
                    // Exhale phase (6 seconds)
                    setPhase('exhale');
                    setGlowIntensity(0);
                    setTimeout(() => {
                        // Rest phase (2 seconds)
                        setPhase('rest');
                        setGlowIntensity(0);
                        setTimeout(() => {
                            breathingCycle();
                        }, 2000);
                    }, 6000);
                }, 4000);
            }, 4000);
        };

        breathingCycle();
    }, []);

    useEffect(() => {
        const moveFirefly = () => {
            const canvas = canvasRef.current;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 100;
            const angle = Date.now() / 1000;

            setFireflyPosition({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius
            });

            requestAnimationFrame(moveFirefly);
        };

        moveFirefly();
    }, []);

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Осознанное дыхание</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="breathing-firefly-container">
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    className="breathing-canvas"
                />
                <div className="breath-phase">
                    {phase === 'inhale' && 'Вдох...'}
                    {phase === 'hold' && 'Задержите...'}
                    {phase === 'exhale' && 'Выдох...'}
                    {phase === 'rest' && 'Отдых...'}
                </div>
                <div className="game-info">
                    <p className="game-score">Циклов дыхания: {score}</p>
                    <p className="game-instructions">
                        Следите за мягким свечением светлячка и дышите в такт его движению.<br />
                        Это поможет вам вернуть ощущение спокойствия и гармонии.
                    </p>
                </div>
            </div>
        </div>
    );
}; 