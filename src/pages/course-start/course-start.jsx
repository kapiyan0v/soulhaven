import './style.css'
import health from '../../assets/img/health.png'
import {Link, useLocation, useNavigate} from "react-router-dom";

export const CourseStartPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const courseName = location.state?.courseName || 'Осознанное дыхание';
    return (
        <>
            <main className="container landing-section">
                <div className="landing-image">
                    <img src={health} alt="Медитация"/>
                </div>
                <div className="landing-content">
                    <h1>Добро пожаловать в курс «{courseName}»!</h1>
                    <p className="description">Этот курс поможет вам лучше управлять стрессом, тревожностью и своим
                        состоянием через дыхательные практики</p>
                </div>
            </main>

            <div className="container">
                <p className="readiness-text">Готовы начать? Нажмите кнопку ниже, чтобы приступить к курсу и изменить
                    свою жизнь к лучшему!</p>
                <div className="start-container">
                    <button
                        className="start-btn"
                        onClick={() => navigate('/course-breathe', { state: { courseName } })}
                    >
                        Приступить к курсу
                    </button>
                </div>
                <Link to='/courses'>
                    <i className="fas fa-arrow-left"></i>Вернуться к курсам
                </Link>
            </div>
        </>
    )
}