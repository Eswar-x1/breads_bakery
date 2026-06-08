import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import RecipeModal from './RecipeModal';
import FarmersModal from './FarmersModal';

export default function IntroSplit() {
  const [modalOpen, setModalOpen]     = useState(false);
  const [farmersOpen, setFarmersOpen] = useState(false);

  return (
    <>
      <section id="about" className="split-section">
        <div className="split-container">

          <div className="split-row">
            <div className="split-image-block img-artisan-baking" />
            <div className="split-text-block">
              <ScrollReveal>
                <span className="split-accent-label">Our Tradition</span>
                <h2>Baked from Scratch,<br />Every Single Day</h2>
                <p>We believe great bread requires patience. Our dedicated kitchen staff works through the night monitoring natural fermentation cycles and perfecting every loaf.</p>
                <button className="btn-text-link" onClick={() => setModalOpen(true)}>
                  Explore Our Process &rarr;
                </button>
              </ScrollReveal>
            </div>
          </div>

          <div className="split-row reverse-row">
            <div className="split-image-block img-ingredients" />
            <div className="split-text-block">
              <ScrollReveal>
                <span className="split-accent-label">The Ingredients</span>
                <h2>Pure Grains.<br />No Shortcuts.</h2>
                <p>Our signature crust comes from simple elements: organic locally-ground flour, filtered water, and our 13-year-old sourdough starter that we've nurtured since day one.</p>
                <button className="btn-text-link" onClick={() => setFarmersOpen(true)}>Meet Our Farmers &rarr;</button>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

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

      <div className="photo-mosaic">
        <div className="mosaic-img mosaic-1" />
        <div className="mosaic-img mosaic-2" />
        <div className="mosaic-img mosaic-3" />
      </div>

      <RecipeModal  open={modalOpen}   onClose={() => setModalOpen(false)} />
      <FarmersModal open={farmersOpen} onClose={() => setFarmersOpen(false)} />
    </>
  );
}
