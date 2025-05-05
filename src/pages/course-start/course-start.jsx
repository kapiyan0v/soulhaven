import './style.css'
import health from '../../assets/img/health.png'
import {Link} from "react-router-dom";

export const CourseStartPage = () => {
    return (
        <>
            <main className="container landing-section">
                <div className="landing-image">
                    <img src={health} alt="Медитация"/>
                </div>
                <div className="landing-content">
                    <h1>Добро пожаловать в курс «Осознанное дыхание»!</h1>
                    <p className="description">Этот курс поможет вам лучше управлять стрессом, тревожностью и своим
                        состоянием через дыхательные практики</p>
                </div>
            </main>

            <div className="container">
                <p className="readiness-text">Готовы начать? Нажмите кнопку ниже, чтобы приступить к курсу и изменить
                    свою жизнь к лучшему!</p>
                <div className="start-container">
                    <Link to='/course-breathe'>
                        Приступить к курсу
                    </Link>
                </div>
                <Link to='/courses'>
                    <i className="fas fa-arrow-left"></i>Вернуться к курсам
                </Link>
            </div>
        </>
    )
}