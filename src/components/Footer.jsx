export default function Footer() {
    return (
        <footer style={{ padding: "1rem", borderTop: "1px solid #ddd", marginTop: "2rem"}}>
            <small>&copy; {new Date().getFullYear()} Celebration Creations</small>
        </footer>
    );
}