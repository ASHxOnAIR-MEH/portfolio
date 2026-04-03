const Hero = () => {
    return (
        <header id="home" className="hero">
            <div className="hero-content">
                <p className="subtitle animate-up">VISIONARY • INNOVATOR • ENTREPRENEUR</p>
                <h1 className="animate-up delay-1">Muhammed Ashik</h1>
                <h2 className="animate-up delay-2">Building the Future of <span className="highlight">Affordable Healthcare</span> Innovation.</h2>
                <p className="description animate-up delay-3">Founder & CEO of ArogyaSmart Health Technology | Transforming lives through cutting-edge med-tech solutions.</p>
                <div className="hero-cta animate-up delay-4">
                    <a href="#products" className="btn-neon">Explore Innovations</a>
                    <a href="#about" className="btn-outline">My Journey</a>
                </div>
            </div>
            <div className="scroll-indicator">
                <a href="#about">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </header>
    );
};

export default Hero;
