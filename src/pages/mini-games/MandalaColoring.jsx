import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

const COMPLEXITY_LEVELS = {
    easy: { segments: 8, patterns: 3 },
    medium: { segments: 12, patterns: 5 },
    hard: { segments: 16, patterns: 7 }
};

const COLORS = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B59B6', '#3498DB', '#E67E22', '#2ECC71'
];

export const MandalaColoring = () => {
    const [complexity, setComplexity] = useState('medium');
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const mandalaRef = useRef(null);

    const drawMandala = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.4;
        const { segments, patterns } = COMPLEXITY_LEVELS[complexity];

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw base circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#646cff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw segments
        for (let i = 0; i < segments; i++) {
            const angle = (i * 2 * Math.PI) / segments;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + radius * Math.cos(angle),
                centerY + radius * Math.sin(angle)
            );
            ctx.stroke();
        }

        // Draw patterns
        for (let i = 0; i < patterns; i++) {
            const patternRadius = (radius * (i + 1)) / patterns;
            ctx.beginPath();
            ctx.arc(centerX, centerY, patternRadius, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Store mandala data
        mandalaRef.current = {
            centerX,
            centerY,
            radius,
            segments,
            patterns
        };
    };

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        handleDraw(e);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    const handleMouseMove = (e) => {
        if (isDrawing) {
            handleDraw(e);
        }
    };

    const handleDraw = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ctx = canvas.getContext('2d');

        // Draw in all segments
        const { centerX, centerY, radius, segments } = mandalaRef.current;
        const angle = Math.atan2(y - centerY, x - centerX);
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

        if (distance <= radius) {
            for (let i = 0; i < segments; i++) {
                const segmentAngle = angle + (i * 2 * Math.PI) / segments;
                const segmentX = centerX + distance * Math.cos(segmentAngle);
                const segmentY = centerY + distance * Math.sin(segmentAngle);

                ctx.beginPath();
                ctx.arc(segmentX, segmentY, 5, 0, Math.PI * 2);
                ctx.fillStyle = selectedColor;
                ctx.fill();
            }
        }
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMandala();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 800;
        canvas.height = 600;
        drawMandala();
    }, [complexity]);

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Творческая медитация</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="mandala-game-container">
                <canvas
                    ref={canvasRef}
                    className="mandala-canvas"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                />
                <div className="mandala-controls">
                    <div className="complexity-controls">
                        <h3>Сложность:</h3>
                        <select
                            value={complexity}
                            onChange={(e) => setComplexity(e.target.value)}
                            className="complexity-select"
                        >
                            <option value="easy">Легкая</option>
                            <option value="medium">Средняя</option>
                            <option value="hard">Сложная</option>
                        </select>
                    </div>
                    <div className="color-palette">
                        {COLORS.map((color) => (
                            <button
                                key={color}
                                className="color-button"
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                    <button onClick={handleClear} className="clear-button">
                        Очистить
                    </button>
                </div>
            </div>
        </div>
    );
};