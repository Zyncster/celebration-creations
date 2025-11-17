import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Celebration Creations</h1>
                    <p className="hero-subtitle">
                        Hi, I'm <strong>Theresa Bishop</strong>. I create custom balloon arches and garlands that transform your celebrations into unforgettable experiences.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/gallery" className="btn btn-primary">
                            View Gallery
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get in touch
                        </Link>
                    </div>
                </div>

                {/* Decorative balloon emojis */}
                <div className="balloon-decor balloon-1">🎈</div>
                <div className="balloon-decor balloon-2">🎉</div>
                <div className="balloon-decor balloon-3">🎊</div>
            </section>

            {/* Features Section */}

            <section className="features-section">
                <h2 className="section-title">Why Choose Celebreation Creations?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3 className="feature-title">Custom Designs</h3>
                        <p className="feature-description">
                            Every creation is tailored to match your event's theme and color palette perfectly.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">✨</div>
                        <h3 className="feature-title">Premium Quality</h3>
                        <p className="feature-description">
                            I use only the highest quality balloons and materials for long-lasting, beautiful displays.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💝</div>
                        <h3 className="feature-title">Attention to Detail</h3>
                        <p className="feature-description">
                            From consultation to installation, every detail is carefully crafted to exceed your expectations.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3 className="feature-title">Perfect for Any Event</h3>
                        <p className="feature-description">
                            Birthdays, weddings, corporate events, baby showers, and more - no celebration is too big or small. 
                        </p>
                    </div>
                </div>
            </section>

            {/* Placeholder Image Section */}
            <section className="showcase-section">
                <div className="showcase-content">
                    <h2 className="section-title">Transform Your Event</h2>
                    <div className="image-placeholder">
                        <div className="placeholder-icons">🎈🎉🎊</div>
                        <p className="placeholder-text">
                            Featured balloon arch photo coming soon! Imagine your perfect celebration brought to life with custom balloon designs.
                        </p>
                    </div>
                    <p className="showcase-tip">
                        💡 Tip: Upload a photo of one of your best balloon arches here to showcase your work!
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="section-title">Ready to Make Your Event Special?</h2>
                    <p className="cta-text">
                        Let's discuss your vision and create something amazing together. I'd love you hear about your upcoming celebration!
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                    Contact Me Today!</Link>
                </div>
            </section>
        </div>
    )
};