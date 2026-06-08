import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-flex-container">

        <div className="footer-col">
          <h4 className="footer-logo">BREADS BAKERY</h4>
          <p className="footer-tagline">Bringing the authentic taste of old-world artisan baking directly to the streets of New York City.</p>
        </div>

        <div className="footer-col">
          <h5>Union Square Flagship</h5>
          <p>18 East 16th Street</p>
          <p>New York, NY 10003</p>
          <p className="footer-hours">Mon - Sun: 6:00 AM - 8:00 PM</p>
        </div>

        <div className="footer-col">
          <h5>Upper West Side</h5>
          <p>2014 Broadway</p>
          <p>New York, NY 10023</p>
          <p className="footer-hours">Mon - Sun: 7:00 AM - 7:00 PM</p>
        </div>

        <div className="footer-col">
          <h5>Inquiries</h5>
          <ul className="footer-links-list">
            <li><a href="#catering">Catering Options</a></li>
            <li><a href="#wholesale">Wholesale Supply</a></li>
            <li><a href="#careers">Join Our Kitchen Team</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Breads Bakery NYC Concept Mirror. Designed for Educational React Development.</p>
      </div>
    </footer>
  );
}
