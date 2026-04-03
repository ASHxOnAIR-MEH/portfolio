import { useState } from 'react';

const CoFounder = () => {
    const [imgError, setImgError] = useState(false);

    return (
        <section id="cofounder" className="section dark-alt">
            <div className="container">
                <div className="section-title">
                    <h2>Medical <span className="highlight">Expertise</span></h2>
                    <div className="line"></div>
                </div>
                <div className="about-grid" style={{ direction: 'rtl' }}>
                    
                    <div className="about-text glass-card fade-in delay-1" style={{ direction: 'ltr' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#111827' }}>Dr. Ragesh S</h3>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--neon-cyan)', marginBottom: '1.5rem', fontWeight: '600' }}>Co-Founder & Medical Director</h4>
                        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151', paddingLeft: '1rem', borderLeft: '4px solid var(--neon-green)' }}>
                            IMA (Indian Medical Association) President, Kollam District
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Combining engineering brilliance with profound medical expertise, Dr. Ragesh S ensures that ArogyaSmart's innovations are not only technologically advanced but also clinically viable and patient-centric.
                        </p>
                    </div>

                    <div className="about-image fade-in" style={{ direction: 'ltr' }}>
                        <div className="image-wrapper glow-border" style={imgError ? { background: '#e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', borderRadius: '16px' } : {}}>
                            {!imgError ? (
                                <img 
                                    src="/doctor.png" 
                                    alt="Dr. Ragesh S - Co-Founder" 
                                    style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block', objectFit: 'cover' }}
                                    onError={() => setImgError(true)} 
                                />
                            ) : (
                                <div style={{ padding: '4rem', textAlign: 'center', color: '#6b7280' }}>
                                    <i className="fas fa-user-md fa-4x"></i>
                                    <p style={{ marginTop: '1rem', fontWeight: '600' }}>Dr. Ragesh S</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoFounder;
