import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {Home} from './pages/home/Home.jsx';
import {Courses} from "./pages/courses/courses.jsx";
import {CourseStartPage} from "./pages/course-start/course-start.jsx";
import {CourseBreathe} from "./pages/course-breathe/course-breathe.jsx";
import {LoginPage} from "./pages/login/login.jsx";
import {Registration} from "./pages/registration/registration.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'courses', element: <Courses /> },
            { path: '/course-start', element: <CourseStartPage /> },
            { path: '/course-breathe', element: <CourseBreathe /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <Registration /> }
        ],
    },

]);

export default router;