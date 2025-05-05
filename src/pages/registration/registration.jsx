import './style.css'

export const Registration = () => {
    return (
        <div className="reg-container">
            <div className="left-panel">
                <div className="logo-large">soulhaven</div>
            </div>
            <div className="right-panel">

                <div className="login-container">
                    <h1>Регистрация</h1>
                    <form id="loginForm">
                        <div className="form-group">
                            <label htmlFor="login">E-mail</label>
                            <input type="text" id="login" name="login" placeholder="Укажите свой E-mail"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" name="password" placeholder="Введите пароль"/>
                        </div>
                        <button type="submit" className="login-button">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}