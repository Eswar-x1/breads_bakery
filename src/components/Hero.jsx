import React, { useEffect, useState } from 'react';

export default function Hero({ onViewMenu }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <header id="home" className="hero-container">
      <div
        className="hero-content"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.1s ease, transform 1.1s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        <span className="hero-tag">Breads Bakery — New York City</span>
        <h1>BAKED WITH SOUL,<br />SERVED WITH LOVE</h1>
        <p>Artisan breads, world-famous babka and pastries crafted daily in the heart of New York City since 2013.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onViewMenu}>View Daily Menu</button>
          <a href="#about" className="btn-ghost">Our Story</a>
        </div>
      </div>
    </header>
  );
}
