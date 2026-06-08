import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSplit from './components/IntroSplit';
import ProductList from './components/ProductList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import './index.css';

const BAKERY_PRODUCTS = [
  { id: 1, category: 'Breakfast', title: 'Signature Chocolate Babka',    price: 9.50,  description: 'Our world-famous rich brioche dough swirled with deep chocolate.',       image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600' },
  { id: 2, category: 'Pastries',  title: 'Handcrafted Sourdough',        price: 12.00, description: 'Naturally leavened and slow-fermented for 36 hours.',                    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600' },
  { id: 3, category: 'Specials',  title: 'Traditional Butter Croissant', price: 5.75,  description: 'Classic French-style pastry featuring premium layers of butter.',        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600' },
  { id: 4, category: 'Breakfast', title: 'Almond Danish',                price: 6.50,  description: 'Flaky Danish pastry filled with almond cream and slivered almonds.',    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600' },
  { id: 5, category: 'Pastries',  title: 'Cinnamon Roll',                price: 7.00,  description: 'Soft, pillowy roll glazed with cream cheese frosting.',                  image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600' },
  { id: 6, category: 'Specials',  title: 'Seasonal Fruit Tart',          price: 8.25,  description: 'Buttery tart shell with pastry cream and fresh seasonal fruit.',         image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600' },
];

const VIEWS = [
  { mode: 'desktop', Icon: FaDesktop,   label: 'Desktop' },
  { mode: 'tablet',  Icon: FaTabletAlt, label: 'Tablet'  },
  { mode: 'mobile',  Icon: FaMobileAlt, label: 'Mobile'  },
];

export default function App() {
  const [viewMode, setViewMode]                 = useState('desktop');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems]               = useState([]);
  const [cartOpen, setCartOpen]                 = useState(false);
  const menuRef = useRef(null);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      return exists
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  };

  const removeItem = (id) => setCartItems(prev => prev.filter(i => i.id !== id));

  // close drawer on outside click
  useEffect(() => {
    const handler = (e) => {
      if (cartOpen && !e.target.closest('.cart-drawer') && !e.target.closest('.cart-icon-btn'))
        setCartOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [cartOpen]);

  return (
    <div className="app-shell">

      {/* Device toolbar */}
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
              <Icon /><span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Preview frame */}
      <div className={`preview-frame preview-${viewMode}`}>
        <Navbar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          cartCount={cartCount}
          onCartOpen={() => setCartOpen(true)}
        />
        <main>
          <Hero onViewMenu={() => menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
          <IntroSplit />
          <ProductList
            products={BAKERY_PRODUCTS}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onAddToCart={addToCart}
            cartItems={cartItems}
            sectionRef={menuRef}
          />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Cart drawer (outside preview frame so it always overlays full screen) */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onChangeQty={changeQty}
        onRemove={removeItem}
      />

    </div>
  );
}
