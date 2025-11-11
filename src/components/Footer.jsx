import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Celebration Creations
                </p>
                <p className="footer-tagLine">
                    Making your celebrations unforgettable, one balloon arch at a time
                </p>
            </div>
        </footer>
    );
}