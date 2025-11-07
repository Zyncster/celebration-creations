import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">Celebration Creations</h1>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </div>
        </header>
    );
}