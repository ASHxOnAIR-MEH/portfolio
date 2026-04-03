const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Awards & <span className="highlight">Press</span></h2>
                    <div className="line"></div>
                </div>

                <div className="glass-card" style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{ fontSize: '1.8rem', color: '#111827' }}>AROGYA 2025 – A Year of Impact & Innovation</h3>
                        <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            2025 was a monumental year for ArogyaSmart. Our journey from product idea validation to prototyping led to significant regional and global recognition. We proudly secured <strong>10+ Inter-College Victories</strong> and achieved <strong>1 International Milestone</strong>, participating in extensive investor pitching experiences and multiple ideathons.
                        </p>
                    </div>
                    
                    <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                        <img 
                            src="/arogya-2025.jpg" 
                            alt="Arogya 2025 - A Year of Impact & Innovation" 
                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                </div>

                <div className="achievements-grid">
                    {/* Achievement 1 */}
                    <div className="achievement-card glass-card fade-in">
                        <div className="achievement-img-wrapper">
                            <img 
                                src="/oralink-prize.jpg" 
                                alt="Oralink First Prize" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <h3>Prototype 2.0 Competition - First Prize</h3>
                        <p>Won the First Prize for the Tongue-Controlled Multi-Assistive System (ORALINK), sponsored by Franklin's Lectures.</p>
                    </div>
                    {/* Achievement 2 */}
                    <div className="achievement-card glass-card fade-in delay-1">
                        <div className="achievement-img-wrapper">
                            <img 
                                src="/leap-pitch.jpg" 
                                alt="LEAP 2025 Pitch Finalist" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <h3>LEAP 2025 Pitch Finalist</h3>
                        <p>Finalist for a ₹3 Crore Pitch at LEAP 2025, an edtech platform initiative by the Gokulam Group.</p>
                    </div>
                    {/* Achievement 3 */}
                    <div className="achievement-card glass-card fade-in delay-2">
                        <div className="achievement-img-wrapper">
                            <img 
                                src="/iedc-summit.jpg" 
                                alt="IEDC Summit Shortlisted" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <h3>Kerala Startup Mission IEDC Summit</h3>
                        <p>Officially shortlisted and represented ArogyaSmart at the prestigious 1-Tank competition at the IEDC Summit 2025.</p>
                    </div>
                    {/* Achievement 4 */}
                    <div className="achievement-card glass-card fade-in">
                        <div className="achievement-img-wrapper">
                            <img 
                                src="/energy-festival.jpg" 
                                alt="International Energy Festival Winners" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <h3>International Energy Festival</h3>
                        <p>Emerged as Regional Winners at the International Energy Festival, showcasing our innovation to national leaders.</p>
                    </div>
                    {/* Achievement 5 */}
                    <div className="achievement-card glass-card fade-in delay-1">
                        <div className="achievement-img-wrapper">
                            <img 
                                src="/newspaper-feature.jpg" 
                                alt="Malayala Manorama News Feature" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                        <h3>Featured in Malayala Manorama</h3>
                        <p>Covered by the all-Kerala Malayala Manorama newspaper for our groundbreaking Energy Harvesting Health Monitoring Shoe.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
