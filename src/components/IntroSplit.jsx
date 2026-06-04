import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function IntroSplit() {
  return (
    <>
      <section id="about" className="split-section">
        <div className="split-container">

          {/* Row 1 */}
          <div className="split-row">
            <ScrollReveal>
              <div className="split-image-block img-artisan-baking" />
            </ScrollReveal>
            <ScrollReveal delayClass="delay-2">
              <div className="split-text-block">
                <span className="split-accent-label">Our Tradition</span>
                <h2>Baked from Scratch,<br />Every Single Day</h2>
                <p>We believe great bread requires patience. Our dedicated kitchen staff works through the night monitoring natural fermentation cycles and perfecting every loaf.</p>
                <button className="btn-text-link">Explore Our Process &rarr;</button>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="split-row reverse-row">
            <ScrollReveal>
              <div className="split-image-block img-ingredients" />
            </ScrollReveal>
            <ScrollReveal delayClass="delay-2">
              <div className="split-text-block">
                <span className="split-accent-label">The Ingredients</span>
                <h2>Pure Grains.<br />No Shortcuts.</h2>
                <p>Our signature crust comes from simple elements: organic locally-ground flour, filtered water, and our 13-year-old sourdough starter that we've nurtured since day one.</p>
                <button className="btn-text-link">Meet Our Farmers &rarr;</button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Full-width photo quote banner ── */}
      <div className="photo-quote-banner">
        <div className="photo-quote-overlay" />
        <ScrollReveal>
          <div className="photo-quote-content">
            <p className="photo-quote-mark">"</p>
            <p className="photo-quote-text">Good bread is the most fundamentally satisfying of all foods — and good bread with fresh butter is the greatest of feasts.</p>
            <span className="photo-quote-author">— James Beard</span>
          </div>
        </ScrollReveal>
      </div>

      {/* ── 3-photo mosaic strip ── */}
      <div className="photo-mosaic">
        <div className="mosaic-img mosaic-1" />
        <div className="mosaic-img mosaic-2" />
        <div className="mosaic-img mosaic-3" />
      </div>
    </>
  );
}
