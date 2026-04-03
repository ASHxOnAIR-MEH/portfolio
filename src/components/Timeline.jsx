const Timeline = () => {
    return (
        <section id="timeline" className="section dark-alt">
            <div className="container">
                <div className="section-title">
                    <h2>The <span className="highlight">Journey</span></h2>
                    <div className="line"></div>
                </div>
                <div className="timeline">
                    <div className="timeline-item fade-in">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <h3>Present</h3>
                            <h4>Scaling ArogyaSmart</h4>
                            <p>Expanding product lines and reaching new markets to bring affordable healthcare to millions.</p>
                        </div>
                    </div>
                    <div className="timeline-item fade-in">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <h3>Product Development Phase</h3>
                            <h4>Prototyping & Patents</h4>
                            <p>Successfully prototyped the Duo Scan and Energy Harvesting Shoes. Secured foundational intellectual property.</p>
                        </div>
                    </div>
                    <div className="timeline-item fade-in">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <h3>Inception</h3>
                            <h4>Founding ArogyaSmart</h4>
                            <p>Partnered with Dr. Ragesh S to establish ArogyaSmart Health Technology MSME.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
