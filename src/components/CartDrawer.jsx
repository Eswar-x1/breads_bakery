import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingBag } from 'react-icons/fa';

export default function CartDrawer({ open, onClose, cartItems, onChangeQty, onRemove }) {
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      {/* Overlay */}
      {open && <div className="cart-overlay" onClick={onClose} />}

      {/* Drawer */}
      <div className={`cart-drawer ${open ? 'open' : ''}`}>

        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <FaShoppingBag />
            <span>Your Cart</span>
            {cartItems.length > 0 && (
              <span className="cart-drawer-count">
                {cartItems.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </div>
          <button className="cart-drawer-close" onClick={onClose}><FaTimes /></button>
        </div>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🧺</div>
            <p>Your cart is empty</p>
            <span>Add some delicious items from our menu!</span>
            <button className="cart-continue-btn" onClick={onClose}>Browse Menu</button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.title}</span>
                    <span className="cart-item-unit-price">${item.price.toFixed(2)} each</span>
                    <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => onChangeQty(item.id, -1)}><FaMinus /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => onChangeQty(item.id, +1)}><FaPlus /></button>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemove(item.id)} title="Remove">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-drawer-footer">
              <div className="cart-subtotal">
                <span>Subtotal ({cartItems.reduce((s, i) => s + i.qty, 0)} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="cart-checkout-btn">Proceed to Checkout</button>
              <button className="cart-continue-btn" onClick={onClose}>Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
