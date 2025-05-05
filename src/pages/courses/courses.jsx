import './style.css'
import joga from '../../assets/img/joga.png'
import meditation from '../../assets/img/dyhanije.png'
import trevoj from '../../assets/img/trevoj.png'
import positiv from '../../assets/img/positiv.png'
import {useNavigate} from "react-router-dom";

export const Courses = () => {

    const navigate = useNavigate()

    return (
        <section className="courses-section">
            <div className="container">
                <div className="section-header">
                    <h1 className="section-title">Наши курсы</h1>
                </div>

                <div className="course-cards">
                    <div className="course-card">
                        <img src={meditation} alt="Медитация" className="course-image"/>
                        <div className="course-info">
                            <div>
                                <h2 className="course-title">Осознанное дыхание</h2>
                                <p className="course-description">Техники для быстрого расслабления</p>
                            </div>
                            <button
                                className="details-btn"
                                onClick={() => { navigate('/course-start'); }}
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div className="course-card">
                        <img src={joga} alt="Йога" className="course-image"/>
                        <div className="course-info">
                            <div>
                                <h2 className="course-title">Йога для гармонии</h2>
                                <p className="course-description">Поддержание баланса и расслабления</p>
                            </div>
                            <button className="details-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="course-card">
                        <img src={trevoj} alt="Снижение тревожности" className="course-image"/>
                        <div className="course-info">
                            <div>
                                <h2 className="course-title">Управление тревожностью</h2>
                                <p className="course-description">Стратегия снижения стресса</p>
                            </div>
                            <button className="details-btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="course-card">
                        <img src={positiv} alt="Позитивное мышление" className="course-image"/>
                        <div className="course-info">
                            <div>
                                <h2 className="course-title">Путь к позитиву</h2>
                                <p className="course-description">Укрепление уверенности и радости в жизни</p>
                            </div>
                            <button className="details-btn">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}