import './style.css'
import {Link, useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="container header-content">
            <div className="logo">
                <p>
                    soulhaven
                </p>
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
                    <Link to='/consultations'>
                        Консультации
                    </Link>
                    <Link to='/challenges'>
                        Челленджи
                    </Link>
                    <Link to='/profile'>
                        Профиль
                    </Link>
                </ul>
            </nav>
            <button className="login-btn" onClick={() => navigate('/login')}>Вход/Регистрация</button>
        </div>
    )
}