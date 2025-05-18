import './style.css'
import {Link, useNavigate} from "react-router-dom";
import { useUser } from '../../context/UserContext';
import logo from '../../assets/img/soulhaven.png';
import { FaBrain } from 'react-icons/fa';

export const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser();

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
                    <Link to='/'>
                        Главная
                    </Link>
                    <Link to='/mini-games'>
                        Мини-игры
                    </Link>
                    <Link to='/courses'>
                        Курсы
                    </Link>
                    <a href="#" onClick={e => { e.preventDefault(); navigate('/', { state: { scrollToExperts: true } }); }}>
                        Консультации
                    </a>
                    <Link to='/challenges'>
                        Челленджи
                    </Link>
                    <Link to='/profile'>
                        Профиль
                    </Link>
                </ul>
            </nav>
            {user ? (
                <button className="logout-btn" onClick={handleLogout}>
                    Выйти
                </button>
            ) : (
                <button className="login-btn" onClick={() => navigate('/login')}>Вход/Регистрация</button>
            )}
        </div>
    )
}