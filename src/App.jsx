import './App.css'
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App
