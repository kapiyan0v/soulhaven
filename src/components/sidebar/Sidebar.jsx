import './style.css'

export const Sidebar = () => {
    return (
        <div className="left-sidebar">
            <ul className="menu-list">
                <li>
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#339CCC" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Введение
                </li>
                <li className="active">
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                fill="#339CCC"/>
                            <path d="M12 6V12L16 14" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Теоретическая часть
                </li>
                <li>
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H18C19.1 18 20 17.1 20 16V8L14 2Z"
                                  stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M16 13H8" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M16 17H8" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M10 9H8" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Практические техники
                </li>
                <li>
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 3.93994C17.6139 4.64491 19 5.75975 20 7.12994C21 8.49994 21.5 10.0399 21.5 11.6399C21.5 13.2399 21 14.7799 20 16.1499"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M7 20.0601C5.386 19.3551 4 18.2402 3 16.8701C2 15.5001 1.5 13.9601 1.5 12.3601C1.5 10.7601 2 9.22006 3 7.85006"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 10V14" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M10 12H14" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Видео - демонстрация
                </li>
                <li>
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 4H8C6.9 4 6 4.9 6 6V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V6C18 4.9 17.1 4 16 4Z"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 18H12.01" stroke="#339CCC" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Финальный тест
                </li>
                <li>
                    <div className="menu-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M19.4 15L19.9 12.6C20.1 12.1 19.9 11.6 19.4 11.3L17.3 10.2C17 9.9 16.8 9.5 16.7 9.1L16.2 6.6C16.1 6.1 15.7 5.8 15.2 5.8H12.8C12.4 5.8 12 6.1 11.8 6.6L11.3 9.1C11.1 9.5 10.9 9.8 10.6 10.2L8.5 11.3C8.1 11.6 7.9 12.1 8 12.6L8.6 15"
                                stroke="#339CCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Настройки
                </li>
            </ul>
        </div>
    )
}