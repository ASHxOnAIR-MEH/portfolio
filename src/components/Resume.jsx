import React, { useState } from 'react';

const Resume = () => {
    const [resumeError, setResumeError] = useState(false);
    const [photoError, setPhotoError] = useState(false);

    return (
        <section id="resume" className="section dark-alt">
            <div className="container">
                <div className="section-title center">
                    <h2>Professional <span className="highlight">Profile</span></h2>
                    <p>My Resume & Portrait</p>
                    <div className="line center"></div>
                </div>

                <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem', alignItems: 'start' }}>
                    
                    {/* Portrait Section */}
                    <div className="portrait-container glass-card fade-in" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div className="image-wrapper glow-border" style={{ marginBottom: '1.5rem', background: photoError ? '#e5e7eb' : 'transparent', borderRadius: '12px', overflow: 'hidden', minHeight: photoError ? '350px' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {!photoError ? (
                                <img 
                                    src="/ashik-new-photo.jpg" 
                                    alt="Muhammed Ashik - Portrait" 
                                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                    onError={(e) => {
                                        if (e.target.src.includes('ashik-new-photo.jpg')) {
                                            e.target.src = '/profile-photo.jpg';
                                        } else {
                                            setPhotoError(true);
                                        }
                                    }} 
                                />
                            ) : (
                                <div style={{ padding: '3rem', color: '#6b7280' }}>
                                    <i className="fas fa-camera fa-4x"></i>
                                    <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Portrait Missing</p>
                                    <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Please save your portrait as 'ashik-new-photo.jpg' in the public folder.</p>
                                </div>
                            )}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem' }}>Muhammed Ashik S</h3>
                        <p style={{ color: 'var(--neon-cyan)', fontWeight: 'bold', marginBottom: '1rem' }}>Mechanical Engineering Undergrad</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left', marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem' }}><i className="fas fa-map-marker-alt" style={{ width: '20px', color: 'var(--neon-cyan)' }}></i> Kollam, Kerala</p>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem' }}><i className="fas fa-envelope" style={{ width: '20px', color: 'var(--neon-cyan)' }}></i> muhammedashik.work@gmail.com</p>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem' }}><i className="fas fa-phone" style={{ width: '20px', color: 'var(--neon-cyan)' }}></i> +91 7560901337</p>
                        </div>
                    </div>

                    {/* Resume Document Section */}
                    <div className="resume-document glass-card fade-in delay-1" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#111827' }}>Curriculum Vitae</h3>
                            <a href="/ashik-resume.jpg" target="_blank" rel="noopener noreferrer" className="btn-neon-nav" style={{ fontSize: '0.9rem' }}>
                                <i className="fas fa-download"></i> View / Save
                            </a>
                        </div>
                        
                        <div className="resume-preview glow-border" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', background: '#fff', padding: '0.5rem', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {!resumeError ? (
                                <img 
                                    src="/ashik-resume.jpg" 
                                    alt="Resume Document" 
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                    onError={() => setResumeError(true)} 
                                />
                            ) : (
                                <div style={{ textAlign: 'center', color: '#9ca3af', padding: '5rem' }}>
                                    <i className="fas fa-file-alt fa-5x"></i>
                                    <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>Resume document not found.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
