const Startup = () => {
    return (
        <section id="startup" className="section dark-alt">
            <div className="container">
                <div className="section-title center">
                    <h2>Arogya<span className="highlight">Smart</span></h2>
                    <p>Health Technology MSME</p>
                    <div className="line center"></div>
                </div>
                <div className="startup-content glass-card fade-in">
                    <div className="startup-logo">
                        <img 
                            src="/branding.png" 
                            alt="ArogyaSmart Logo" 
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'block';
                            }}
                        />
                        <h3 style={{ display: 'none', fontSize: '2rem', color: '#00f3ff' }}>ArogyaSmart</h3>
                    </div>
                    <p className="startup-vision">"Empowering the world with intelligent, affordable, and accessible healthcare ecosystem."</p>
                </div>
            </div>
        </section>
    );
};

export default Startup;
