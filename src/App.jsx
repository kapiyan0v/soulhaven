import { Outlet } from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar.jsx";
import Footer from './components/footer/Footer';
import './index.css';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
