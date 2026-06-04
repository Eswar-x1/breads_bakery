import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
        <span className="product-badge">{product.category}</span>
      </div>
      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-card-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="cta-btn-secondary" onClick={onAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
