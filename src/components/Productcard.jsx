import React from 'react';

export default function ProductCard({ product, onAddToCart, cartItems = [] }) {
  const inCart = cartItems.find(i => i.id === product.id);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
        <span className="product-badge">{product.category}</span>
        {inCart && <span className="product-qty-badge">×{inCart.qty}</span>}
      </div>
      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-card-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className={`cta-btn-secondary ${inCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(product)}
          >
            {inCart ? `Add More (${inCart.qty})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
