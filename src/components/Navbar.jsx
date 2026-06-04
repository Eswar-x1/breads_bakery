import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

const CATEGORIES = ['All', 'Breakfast', 'Pastries', 'Specials'];

const ChevronIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar({ selectedCategory, onCategoryChange, cartCount = 0 }) {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const pickCategory = (cat) => { onCategoryChange(cat); setMenuOpen(false); setMobileOpen(false); };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">BREADS BAKERY</a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>

          <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`} ref={menuRef}>
            <button
              type="button"
              className="nav-dropdown-button"
              onClick={() => setMenuOpen(o => !o)}
            >
              {selectedCategory === 'All' ? 'Menu' : selectedCategory}
              <ChevronIcon />
            </button>
            <div className="nav-dropdown-menu">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => pickCategory(cat)}
                  className={selectedCategory === cat ? 'active' : ''}
                >
                  {cat === 'All' ? 'All Items' : cat}
                </button>
              ))}
            </div>
          </div>

          <a href="#contact">Contact</a>
        </div>

        {/* Right icons */}
        <div className="nav-icons-group">
          <button className="icon-btn" aria-label="Search"><FaSearch /></button>
          <button className="icon-btn" aria-label="Cart" style={{ position: 'relative' }}>
            <FaShoppingBag />
            {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
          </button>
          <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#home"    onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#about"   onClick={() => setMobileOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <div className="mobile-nav-divider">Filter Menu</div>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => pickCategory(cat)}
            className={selectedCategory === cat ? 'mobile-cat-active' : ''}
          >
            {cat === 'All' ? 'All Items' : cat}
          </button>
        ))}
      </div>
    </nav>
  );
}
