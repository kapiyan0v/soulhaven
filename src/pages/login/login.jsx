import './style.css'
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="left-panel">
                <div className="logo-large">soulhaven</div>
            </div>
            <div className="right-panel">

                <div className="login-container">
                    <h1>Вход</h1>
                    <form id="loginForm">
                        <div className="form-group">
                            <label htmlFor="login">Логин</label>
                            <input type="text" id="login" name="login"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" name="password"/>
                        </div>
                        <div className="remember-me">
                            <div>
                                <input type="checkbox" id="remember" name="remember"/>
                                <label htmlFor="remember" style={{display: 'inline'}}>Запомнить меня</label>
                            </div>
                        </div>
                        <button type="submit" className="login-button">Войти</button>
                        <div className="register">
                            <span>Новый пользователь?</span>
                            <Link to='/register'>
                                Регистрация
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}