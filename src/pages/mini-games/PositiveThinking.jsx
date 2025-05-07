import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mini-games.css';

const WORD_CATEGORIES = {
    subjects: ['Я', 'Моя жизнь', 'Мой путь', 'Мое сердце', 'Мой разум', 'Моя душа', 'Моя энергия', 'Мой потенциал'],
    verbs: ['создаю', 'выбираю', 'творю', 'развиваю', 'расту', 'сиять', 'процветать', 'расцветать', 'раскрываюсь'],
    qualities: ['гармоничную', 'счастливую', 'успешную', 'радостную', 'благополучную', 'прекрасную', 'удивительную', 'волшебную'],
    objects: ['жизнь', 'реальность', 'будущее', 'настоящее', 'путь', 'историю', 'судьбу', 'возможности']
};

const INSPIRING_PHRASES = [
    "Каждый день - новая возможность для роста",
    "Я создаю свою счастливую реальность",
    "Моя жизнь наполнена радостью и гармонией",
    "Я выбираю путь успеха и процветания",
    "Мой потенциал безграничен",
    "Я раскрываюсь и сияю каждый день"
];

export const PositiveThinking = () => {
    const [selectedWords, setSelectedWords] = useState([]);
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const getRandomWords = () => {
        const words = [];
        Object.values(WORD_CATEGORIES).forEach(category => {
            const randomIndex = Math.floor(Math.random() * category.length);
            words.push(category[randomIndex]);
        });
        return words;
    };

    const [availableWords, setAvailableWords] = useState(getRandomWords());

    const handleWordClick = (word) => {
        if (selectedWords.length < 4) {
            setSelectedWords([...selectedWords, word]);
            setAvailableWords(availableWords.filter(w => w !== word));
        }
    };

    const handleSelectedWordClick = (word) => {
        setSelectedWords(selectedWords.filter(w => w !== word));
        setAvailableWords([...availableWords, word]);
    };

    const handleSubmit = () => {
        const phrase = selectedWords.join(' ');
        setCurrentPhrase(phrase);
        
        // Check if the phrase makes sense
        const hasSubject = WORD_CATEGORIES.subjects.some(word => selectedWords.includes(word));
        const hasVerb = WORD_CATEGORIES.verbs.some(word => selectedWords.includes(word));
        const hasQuality = WORD_CATEGORIES.qualities.some(word => selectedWords.includes(word));
        const hasObject = WORD_CATEGORIES.objects.some(word => selectedWords.includes(word));

        if (hasSubject && hasVerb && (hasQuality || hasObject)) {
            setScore(prev => prev + 1);
            setMessage('Отличная фраза! Она вдохновляет и заряжает позитивом!');
            setMessageType('success');
        } else {
            setMessage('Попробуйте составить более вдохновляющую фразу. Используйте слова из разных категорий.');
            setMessageType('error');
        }
    };

    const handleNewRound = () => {
        setSelectedWords([]);
        setCurrentPhrase('');
        setMessage('');
        setMessageType('');
        setAvailableWords(getRandomWords());
    };

    return (
        <div className="game-container">
            <div className="game-header">
                <h1>Тренировка позитивного мышления</h1>
                <Link to="/mini-games" className="back-button">
                    Назад к играм
                </Link>
            </div>
            <div className="positive-thinking-container">
                <div className="game-info">
                    <p className="game-score">Создано фраз: {score}</p>
                    <p className="game-instructions">
                        Составьте вдохновляющую фразу из предложенных слов.<br />
                        Используйте слова из разных категорий для создания гармоничной фразы.
                    </p>
                </div>

                <div className="word-selection">
                    <div className="available-words">
                        <h3>Доступные слова:</h3>
                        <div className="word-buttons">
                            {availableWords.map((word, index) => (
                                <button
                                    key={index}
                                    className="word-button"
                                    onClick={() => handleWordClick(word)}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="selected-words">
                        <h3>Ваша фраза:</h3>
                        <div className="word-buttons">
                            {selectedWords.map((word, index) => (
                                <button
                                    key={index}
                                    className="word-button selected"
                                    onClick={() => handleSelectedWordClick(word)}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {currentPhrase && (
                    <div className="current-phrase">
                        <h3>Текущая фраза:</h3>
                        <p>{currentPhrase}</p>
                    </div>
                )}

                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}

                <div className="game-controls">
                    <button
                        className="submit-button"
                        onClick={handleSubmit}
                        disabled={selectedWords.length === 0}
                    >
                        Проверить фразу
                    </button>
                    <button
                        className="new-round-button"
                        onClick={handleNewRound}
                    >
                        Новый набор слов
                    </button>
                </div>

                <div className="inspiration-section">
                    <h3>Примеры вдохновляющих фраз:</h3>
                    <ul>
                        {INSPIRING_PHRASES.map((phrase, index) => (
                            <li key={index}>{phrase}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}; 