import './style.css'
import {Sidebar} from "../../components/sidebar/Sidebar.jsx";
import medit from '../../assets/img/medit.png'
import cel from '../../assets/img/cel.png'

export const CourseBreathe = () => {
    return (
        <div className="app-container">
            <Sidebar />

            <div className="center-content">
                <div className="course-intro">
                    <div className="course-intro-content">
                        <h1>Курс «Осознанное дыхание»</h1>
                        <p>Дыхание — это больше, чем просто физиологический процесс. Оно напрямую связано с нашим
                            эмоциональным состоянием.</p>
                        <p>В этом курсе вы освоите эффективные техники дыхания, которые помогут вам чувствовать себя
                            спокойнее, осознаннее и увереннее.</p>
                    </div>
                    <div className="course-intro-image">
                        <img src={medit} alt="Дыхание"/>
                    </div>
                </div>

                <div className="course-tiles">
                    <div className="course-tile">
                        <h3>Теоретическая часть</h3>
                        <p>Как дыхание влияет на тело и разум</p>
                    </div>
                    <div className="course-tile">
                        <h3>Видео - демонстрация</h3>
                        <p>Посмотри видео, чтобы узнать больше</p>
                    </div>
                </div>

                <div className="course-goal">
                    <div className="course-goal-image">
                        <img src={cel} alt="Цель курса"/>
                    </div>
                    <div>
                        <h2>Цель курса</h2>
                        <p>Научиться использовать дыхательные техники для управления тревожностью, улучшения
                            самочувствия и повышения осознанности</p>
                    </div>
                </div>
            </div>

            <div className="right-sidebar">
                <div className="calendar">
                    <div className="calendar-header">
                        <button>←</button>
                        <h2>Февраль 2025</h2>
                        <button>→</button>
                    </div>
                </div>

                <div className="profile-block">
                    <div>
                        <h4>25 лет</h4>
                        <p>@123456</p>
                        <div className="progress-bar">
                            <div className="progress-bar-fill"></div>
                        </div>
                        <p>Уровень 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}