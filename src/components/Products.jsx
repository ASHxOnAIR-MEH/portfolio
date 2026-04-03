const Products = () => {
    return (
        <section id="products" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Our <span className="highlight">Innovations</span></h2>
                    <div className="line"></div>
                </div>
                <div className="products-grid">
                    {/* Product 1 */}
                    <div className="product-card glass-card fade-in">
                        <div className="product-icon"><i className="fas fa-head-side-mouse"></i></div>
                        <h3>Tongue-Controlled Multi-Assistive System</h3>
                        <p>A revolutionary device enabling individuals with severe motor disabilities to interact with the digital world and control their environment using advanced tongue-gesture recognition.</p>
                        <a href="#" className="read-more">Learn more <i className="fas fa-arrow-right"></i></a>
                    </div>
                    {/* Product 2 */}
                    <div className="product-card glass-card fade-in delay-1">
                        <div className="product-icon"><i className="fas fa-shoe-prints"></i></div>
                        <h3>Energy Harvesting Health Monitoring Shoe</h3>
                        <p>Smart footwear that not only tracks vital health metrics in real-time but also harnesses kinetic energy from walking to power its internal sensors sustainably.</p>
                        <div className="tech-stack">
                            <span>IoT</span> <span>Piezoelectric</span> <span>Health-Tech</span>
                        </div>
                        <a href="#" className="read-more">Learn more <i className="fas fa-arrow-right"></i></a>
                    </div>
                    {/* Product 3 */}
                    <div className="product-card glass-card fade-in delay-2">
                        <div className="product-icon"><i className="fas fa-x-ray"></i></div>
                        <h3>Arogya Duo Scan</h3>
                        <p>A portable, dual-modal scanning device designed for rapid field diagnostics. Democratizing deep medical imaging for remote and under-resourced areas.</p>
                        <div className="product-images">
                             <img 
                                src="/duo scan.png" 
                                alt="Duo Scan" 
                                onError={(e) => { e.target.style.display = 'none'; }}
                             />
                        </div>
                        <a href="#" className="read-more">Learn more <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
