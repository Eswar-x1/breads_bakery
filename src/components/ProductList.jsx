import React from 'react';
import ProductCard from './Productcard';
import ScrollReveal from './ScrollReveal';

const CATEGORIES = ['All', 'Breakfast', 'Pastries', 'Specials'];

export default function ProductList({ products, selectedCategory, onCategoryChange, onAddToCart, cartItems = [], sectionRef }) {
  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" ref={sectionRef} className="product-section">
      <ScrollReveal>
        <div className="section-header">
          <h2>Our Signature Bakes</h2>
          <p>Handcrafted every morning with wild yeast and organic grains.</p>
        </div>

        {/* Category pill bar */}
        <div className="category-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {filtered.length === 0 ? (
        <p className="no-items-msg">No items in this category yet.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((item, index) => (
            <ScrollReveal key={item.id} delayClass={`delay-${(index % 3) + 1}`}>
              <ProductCard product={item} onAddToCart={onAddToCart} cartItems={cartItems} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
