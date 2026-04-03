import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            if (window.innerWidth <= 768) {
                setMenuOpen(false);
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>ASHIK<span>.</span></a>
                <ul 
                    className="nav-links" 
                    style={menuOpen ? {
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '70px',
                        right: '20px',
                        background: 'rgba(10, 10, 10, 0.95)',
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 243, 255, 0.2)',
                        gap: '15px',
                        alignItems: 'flex-start'
                    } : {}}
                >
                    <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                    <li><a href="#startup" onClick={(e) => handleNavClick(e, '#startup')}>Startup</a></li>
                    <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Products</a></li>
                    <li><a href="#timeline" onClick={(e) => handleNavClick(e, '#timeline')}>Journey</a></li>
                    <li><a href="#achievements" onClick={(e) => handleNavClick(e, '#achievements')}>Achievements</a></li>
                    <li><a href="#contact" className="btn-neon-nav" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
