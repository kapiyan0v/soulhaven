import './style.css'
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { useUser } from '../../context/UserContext';

export const LoginPage = () => {
    const { login } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);
        if (result.success) {
            setError('');
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-page">
            <div className="left-panel">
                <div className="logo-large">soulhaven</div>
            </div>
            <div className="right-panel">
                <div className="login-container">
                    <h1>Вход</h1>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="login">E-mail</label>
                            <input type="text" id="login" name="login" value={email} onChange={e => setEmail(e.target.value)} placeholder="Укажите свой E-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пароль" />
                        </div>
                        {error && <div style={{color: '#e74c3c', marginBottom: 10}}>{error}</div>}
                        <button type="submit" className="login-button">Войти</button>
                        <div className="register">
                            <span>Новый пользователь?</span>
                            <Link to='/register'>Регистрация</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}