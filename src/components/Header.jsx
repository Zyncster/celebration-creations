import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
            <h1 style={{ margin: 0 }}>Celebration Creations</h1>
            <nav style={{ marginTop: "0.5rem" }}>
                <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
                <Link to="/gallery" style={{ marginRight: "1rem" }}>Gallery</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}