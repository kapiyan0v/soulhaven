import { Outlet } from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar.jsx";
import './index.css';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
