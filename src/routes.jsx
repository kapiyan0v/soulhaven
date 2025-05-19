import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {Home} from './pages/home/Home.jsx';
import {Courses} from "./pages/courses/courses.jsx";
import {CourseStartPage} from "./pages/course-start/course-start.jsx";
import {CourseBreathe} from "./pages/course-breathe/course-breathe.jsx";
import {LoginPage} from "./pages/login/login.jsx";
import {Registration} from "./pages/registration/registration.jsx";
import {MiniGames} from "./pages/mini-games/mini-games.jsx";
import {PuzzleGame} from "./pages/mini-games/PuzzleGame.jsx";
import {SnakeGame} from "./pages/mini-games/SnakeGame.jsx";
import { BreathingBubbles } from './pages/mini-games/BreathingBubbles';
import { MandalaColoring } from './pages/mini-games/MandalaColoring';
import { PositiveThinking } from './pages/mini-games/PositiveThinking';
import { BreathingFirefly } from './pages/mini-games/BreathingFirefly';
import Challenges from './pages/challenges/Challenges';
import ChallengeBreath from './pages/challenges/ChallengeBreath';
import ProfileLayout from './pages/profile/ProfileLayout';
import ProfileMain from './pages/profile/ProfileMain';
import ProfileCalendar from './pages/profile/ProfileCalendar';
import ProfileAchievements from './pages/profile/ProfileAchievements';
import ProfilePrivacy from './pages/profile/ProfilePrivacy';
import ProfileSettings from './pages/profile/ProfileSettings';
import { Theoretical } from './pages/theoretical/Theoretical';
import './styles/in-development.css';
import ProfileCabinet from "./pages/profile/ProfileCabinet.jsx";
import MyHistory from "./pages/myhistory/MyHistory.jsx";



const InDevelopmentPage = ({ title }) => (
    <div className="in-development">
        {title} (в разработке)
    </div>
);

const Achievements = () => <div style={{padding: 32}}>Достижения (в разработке)</div>;
const Calendar = () => <div style={{padding: 32}}>Календарь (в разработке)</div>;
const Privacy = () => <div style={{padding: 32}}>Конфиденциальность (в разработке)</div>;
const Settings = () => <div style={{padding: 32}}>Настройки (в разработке)</div>;

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'courses', element: <Courses /> },
            { path: 'course-start', element: <CourseStartPage /> },
            { path: 'course-breathe', element: <CourseBreathe /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <Registration /> },
            { path: 'mini-games', element: <MiniGames /> },
            { path: 'mini-games/puzzle', element: <PuzzleGame /> },
            { path: 'mini-games/snake', element: <SnakeGame /> },
            { path: 'mini-games/breathing-bubbles', element: <BreathingBubbles /> },
            { path: 'mini-games/mandala-coloring', element: <MandalaColoring /> },
            { path: 'mini-games/positive-thinking', element: <PositiveThinking /> },
            { path: 'mini-games/breathing-firefly', element: <BreathingFirefly /> },
            { path: 'theoretical', element: <Theoretical /> },
            { 
                path: 'consultations', 
                element: <InDevelopmentPage title="Консультации" />
            },
            { 
                path: 'challenges', 
                element: <Challenges />
            },
            { 
                path: 'challenges/3-breath',
                element: <ChallengeBreath />
            },
            {
                path: 'my-history',
                element: <MyHistory />
            },
            { 
                path: 'profile', 
                element: <ProfileLayout />,
                children: [
                    { index: true, element: <ProfileMain /> },
                    { path: 'achievements', element: <ProfileAchievements /> },
                    { path: 'cabinet', element: <ProfileCabinet /> },
                    { path: 'calendar', element: <ProfileCalendar /> },
                    { path: 'privacy', element: <ProfilePrivacy /> },
                    { path: 'settings', element: <ProfileSettings /> },
                ]
            }
        ],
    },
]);

export default router;