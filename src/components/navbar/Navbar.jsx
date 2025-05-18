import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../context/UserContext';
import logo from '../../assets/img/soulhaven.png';
import { useState } from 'react';

export const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="container header-content">
            <div className="logo">
                <img src={logo} alt="soulhaven" />
            </div>



            <nav>
                <ul className="nav-menu">
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/mini-games'>Мини-игры</Link></li>
                    <li><Link to='/courses'>Курсы</Link></li>
                    <li><a href="#" onClick={e => { e.preventDefault(); navigate('/', { state: { scrollToExperts: true } }); }}>Консультации</a></li>
                    <li><Link to='/challenges'>Челленджи</Link></li>
                    <li><Link to='/profile'>Профиль</Link></li>
                </ul>
            </nav>

            <ul className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                <li><Link to='/' onClick={() => setMenuOpen(false)}>Главная</Link></li>
                <li><Link to='/mini-games' onClick={() => setMenuOpen(false)}>Мини-игры</Link></li>
                <li><Link to='/courses' onClick={() => setMenuOpen(false)}>Курсы</Link></li>
                <li><a href="#" onClick={e => { e.preventDefault(); navigate('/', { state: { scrollToExperts: true } }); setMenuOpen(false); }}>Консультации</a></li>
                <li><Link to='/challenges' onClick={() => setMenuOpen(false)}>Челленджи</Link></li>
                <li><Link to='/profile' onClick={() => setMenuOpen(false)}>Профиль</Link></li>
            </ul>

            <div className="exit-btn-burger">
                {user ? (
                    <button className="logout-btn" onClick={handleLogout}>Выйти</button>
                ) : (
                    <button className="login-btn" onClick={() => navigate('/login')}>Вход</button>
                )}
                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    );
};
