import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      {/* Photo header banner */}
      <div className="contact-photo-banner">
        <div className="contact-photo-overlay" />
        <div className="contact-banner-text">
          <span className="section-tag">Stay in Touch</span>
          <h2>Visit us or send a message.</h2>
          <p>From order inquiries to catering questions, our team is ready to help.<br />Walk in or reach out — we'll make your next bakery moment unforgettable.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Union Square Flagship</h3>
            <p>18 East 16th Street, New York, NY 10003</p>
            <p>Mon – Sun: 6:00 AM – 8:00 PM</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">📦</div>
            <h3>Online Orders</h3>
            <p>hello@breads-bakery.example</p>
            <p>Order pickup, wholesale, and custom breads.</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon">🎉</div>
            <h3>Catering &amp; Events</h3>
            <p>catering@breads-bakery.example</p>
            <p>Corporate boxes, brunch spreads, and private events.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
