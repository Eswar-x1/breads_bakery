import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSplit from './components/IntroSplit';
import ProductList from './components/ProductList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import './index.css';

const BAKERY_PRODUCTS = [
  { id: 1, category: 'Breakfast', title: 'Signature Chocolate Babka',   price: 9.50,  description: 'Our world-famous rich brioche dough swirled with deep chocolate.',                    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600' },
  { id: 2, category: 'Pastries',  title: 'Handcrafted Sourdough',       price: 12.00, description: 'Naturally leavened and slow-fermented for 36 hours.',                                  image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600' },
  { id: 3, category: 'Specials',  title: 'Traditional Butter Croissant',price: 5.75,  description: 'Classic French-style pastry featuring premium layers of butter.',                      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600' },
  { id: 4, category: 'Breakfast', title: 'Almond Danish',               price: 6.50,  description: 'Flaky Danish pastry filled with almond cream and slivered almonds.',                   image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600' },
  { id: 5, category: 'Pastries',  title: 'Cinnamon Roll',               price: 7.00,  description: 'Soft, pillowy roll glazed with cream cheese frosting.',                               image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600' },
  { id: 6, category: 'Specials',  title: 'Seasonal Fruit Tart',         price: 8.25,  description: 'Buttery tart shell with pastry cream and fresh seasonal fruit.',                       image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600' },
];

const VIEWS = [
  { mode: 'desktop', Icon: FaDesktop,  label: 'Desktop' },
  { mode: 'tablet',  Icon: FaTabletAlt, label: 'Tablet'  },
  { mode: 'mobile',  Icon: FaMobileAlt, label: 'Mobile'  },
];

export default function App() {
  const [viewMode, setViewMode]           = useState('desktop');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount]         = useState(0);
  const menuRef = useRef(null);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-shell">

      {/* ── Always-visible device toolbar ── */}
      <div className="device-toolbar">
        <span className="device-toolbar-label">Preview</span>
        <div className="device-toolbar-switcher">
          {VIEWS.map(({ mode, Icon, label }) => (
            <button
              key={mode}
              className={`device-btn ${viewMode === mode ? 'active' : ''}`}
              onClick={() => setViewMode(mode)}
              title={label}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Resizable preview frame ── */}
      <div className={`preview-frame preview-${viewMode}`}>
        <Navbar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          cartCount={cartCount}
        />
        <main>
          <Hero onViewMenu={() => menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
          <IntroSplit />
          <ProductList
            products={BAKERY_PRODUCTS}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onAddToCart={() => setCartCount(c => c + 1)}
            sectionRef={menuRef}
          />
          <ContactSection />
        </main>
        <Footer />
      </div>

    </div>
  );
}
