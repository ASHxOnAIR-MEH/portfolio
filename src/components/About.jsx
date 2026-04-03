const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>About <span className="highlight">Me</span></h2>
                    <div className="line"></div>
                </div>
                <div className="about-grid">
                    <div className="about-text glass-card fade-in">
                        <h3>Pioneering the Next Generation of Med-Tech</h3>
                        <p>I am deeply passionate about bridging the gap between advanced technology and accessible healthcare. With a focus on innovative product design, I lead teams to create robust solutions for complex medical challenges.</p>
                        <p>My work at ArogyaSmart represents a relentless pursuit to empower individuals with state-of-the-art diagnostic and assistive devices.</p>
                        <div className="stats">
                            <div className="stat-item">
                                <h4 className="counter" data-target="8379">0</h4>
                                <p>Followers</p>
                            </div>
                            <div className="stat-item">
                                <h4 className="counter" data-target="5">0</h4>
                                <p>Products Innovated</p>
                            </div>
                            <div className="stat-item">
                                <h4 className="counter" data-target="15">0</h4><span>+</span>
                                <p>Awards Won</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image fade-in delay-1">
                        <div className="image-wrapper glow-border profile-photo-wrapper">
                            <img 
                                src="/about-photo.jpg" 
                                alt="Muhammed Ashik - Founder & CEO" 
                                id="profile-img" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
