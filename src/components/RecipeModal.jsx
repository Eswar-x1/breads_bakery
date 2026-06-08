import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const RECIPES = [
  {
    id: 1,
    title: 'Signature Chocolate Babka',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
    time: '18 hrs',
    difficulty: 'Advanced',
    steps: [
      { step: 1, title: 'Make the Brioche Dough',       desc: 'Combine flour, sugar, yeast, eggs and warm milk. Slowly incorporate cold butter cubes until the dough is silky and pulls away from the bowl cleanly. This takes about 20 minutes of kneading.' },
      { step: 2, title: 'First Rise — Overnight',       desc: 'Cover the dough and refrigerate overnight for 12 hours. The cold slow-rise develops a deep buttery flavour and makes it easier to roll.' },
      { step: 3, title: 'Prepare Chocolate Filling',    desc: 'Melt dark chocolate with butter. Stir in cocoa powder, powdered sugar and a pinch of cinnamon until smooth and spreadable.' },
      { step: 4, title: 'Roll, Fill & Twist',           desc: 'Roll the dough into a large rectangle. Spread chocolate filling evenly, then roll tightly into a log. Cut lengthwise and twist the two strands together to create the signature babka braid.' },
      { step: 5, title: 'Second Rise',                  desc: 'Place in a loaf tin and let rise at room temperature for 2–3 hours until puffy and nearly doubled.' },
      { step: 6, title: 'Bake & Glaze',                 desc: 'Bake at 375°F for 40 minutes until deep golden. Brush immediately with hot simple syrup to give the babka its signature glossy, moist finish.' },
    ],
  },
  {
    id: 2,
    title: 'Handcrafted Sourdough',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600',
    time: '36 hrs',
    difficulty: 'Intermediate',
    steps: [
      { step: 1, title: 'Feed the Starter',             desc: 'Refresh our 13-year-old sourdough starter with equal parts flour and water 8 hours before mixing. It should be bubbly and doubled in size before use.' },
      { step: 2, title: 'Autolyse',                     desc: 'Mix flour and water together and let rest for 45 minutes. This allows the flour to fully hydrate and gluten to begin developing without any kneading.' },
      { step: 3, title: 'Add Starter & Salt',           desc: 'Fold in the active starter and salt. Perform a series of stretch-and-folds every 30 minutes over 4 hours to build strength and structure.' },
      { step: 4, title: 'Bulk Fermentation',            desc: 'Leave the dough at room temperature for 6–8 hours. Look for a 50–75% volume increase and a domed, jiggly surface.' },
      { step: 5, title: 'Shape & Cold Proof',           desc: 'Shape into a tight boule, place in a floured banneton and refrigerate for 12–16 hours. The cold retard deepens flavour and improves crust.' },
      { step: 6, title: 'Score & Bake in Dutch Oven',   desc: 'Preheat a Dutch oven to 500°F. Score the loaf, bake covered for 20 minutes then uncovered for 25 minutes until the crust is deep mahogany and crackly.' },
    ],
  },
  {
    id: 3,
    title: 'Traditional Butter Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
    time: '12 hrs',
    difficulty: 'Advanced',
    steps: [
      { step: 1, title: 'Make the Détrempe',            desc: 'Mix flour, sugar, salt, yeast and milk into a soft dough (détrempe). Do not over-knead — you want just enough gluten to hold the layers. Rest in the fridge for 1 hour.' },
      { step: 2, title: 'Prepare the Butter Block',     desc: 'Pound cold European-style butter into a flat 7-inch square. It must be pliable but still cold — the same temperature as the dough for even lamination.' },
      { step: 3, title: 'Laminate — First Fold',        desc: 'Encase the butter in the dough and roll into a long rectangle. Perform a letter fold (3 layers). Wrap and chill for 30 minutes.' },
      { step: 4, title: 'Laminate — Second & Third Fold', desc: 'Repeat rolling and folding two more times with 30-minute chill periods between each. You will have 27 beautiful butter layers.' },
      { step: 5, title: 'Cut & Shape',                  desc: 'Roll to 4mm thickness. Cut into long triangles, stretch gently and roll from base to tip. Curve the ends inward to form the classic crescent shape.' },
      { step: 6, title: 'Proof & Bake',                 desc: 'Proof at 75°F for 2–3 hours until visibly puffy and the layers are visible. Egg wash twice, then bake at 400°F for 18–20 minutes until deeply golden.' },
    ],
  },
];

export default function RecipeModal({ open, onClose }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const recipe = RECIPES[active];

  return (
    <div className="recipe-overlay" onClick={onClose}>
      <div className="recipe-modal" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="recipe-close" onClick={onClose}><FaTimes /></button>

        {/* Sidebar — recipe picker */}
        <div className="recipe-sidebar">
          <p className="recipe-sidebar-label">Our Recipes</p>
          {RECIPES.map((r, i) => (
            <button
              key={r.id}
              className={`recipe-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={r.image} alt={r.title} />
              <span>{r.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="recipe-content">
          <div className="recipe-hero-img" style={{ backgroundImage: `url(${recipe.image})` }}>
            <div className="recipe-hero-overlay" />
            <div className="recipe-hero-meta">
              <h2>{recipe.title}</h2>
              <div className="recipe-badges">
                <span>⏱ {recipe.time}</span>
                <span>📊 {recipe.difficulty}</span>
                <span>🍞 {recipe.steps.length} Steps</span>
              </div>
            </div>
          </div>

          <div className="recipe-steps">
            {recipe.steps.map(s => (
              <div key={s.step} className="recipe-step">
                <div className="recipe-step-num">{s.step}</div>
                <div className="recipe-step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
