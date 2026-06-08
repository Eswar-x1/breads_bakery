import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const FARMERS = [
  {
    id: 1,
    name: 'Hudson Valley Grain Farm',
    location: 'Hudson Valley, New York',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600',
    supply: 'Organic Flour',
    since: '2014',
    steps: [
      { step: 1, title: 'Heritage Wheat Varieties',     desc: 'The Kowalski family grows heritage Red Fife and Einkorn wheat on 200 acres of Hudson Valley farmland. These ancient varieties have deeper mineral content and more complex flavour than modern commodity wheat.' },
      { step: 2, title: 'No Pesticides, Ever',          desc: 'Every acre is farmed organically. No synthetic pesticides, herbicides or fungicides have touched this land in over 20 years. The soil is alive with earthworms and beneficial fungi.' },
      { step: 3, title: 'Stone-Ground on Site',         desc: 'Grain is milled fresh on a 100-year-old stone mill within 48 hours of harvest. Stone grinding keeps the bran and germ intact, producing flour with full nutrition and a warm, nutty aroma.' },
      { step: 4, title: 'Delivered Weekly',             desc: 'Every Monday morning, 200 lbs of freshly milled flour arrives at our bakery in Brooklyn. We never stockpile — fresh flour every week means better flavour in every loaf.' },
    ],
  },
  {
    id: 2,
    name: 'Catskill Mountain Dairy',
    location: 'Catskills, New York',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600',
    supply: 'European-Style Butter',
    since: '2016',
    steps: [
      { step: 1, title: 'Grass-Fed Guernsey Cows',      desc: 'The herd of 60 Guernsey cows grazes on open pasture from April through October. Guernsey milk has naturally higher butterfat content — up to 5.2% — which is exactly what makes our croissants so rich.' },
      { step: 2, title: 'Slow-Churned Cultured Butter', desc: 'Cream is cultured with live bacteria for 18 hours before churning. This culturing process gives the butter a subtle tanginess that elevates the flavour of laminated pastries beyond anything a commercial butter can achieve.' },
      { step: 3, title: '84% Butterfat — No Compromise', desc: 'Standard supermarket butter is 80% butterfat. Our Catskill butter is 84%. That extra 4% makes the difference between a good croissant and an unforgettable one.' },
      { step: 4, title: 'Wrapped in Wax, Delivered Cold', desc: 'Each 25 lb block is wrapped in wax paper and packed in ice. It arrives at our bakery every Wednesday at 5 AM — just in time for our pastry team to begin lamination.' },
    ],
  },
  {
    id: 3,
    name: 'Catoctin Creek Orchard',
    location: 'Loudoun County, Virginia',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600',
    supply: 'Seasonal Fruits & Berries',
    since: '2019',
    steps: [
      { step: 1, title: '40 Varieties Across 12 Acres', desc: 'The Chen family grows over 40 varieties of stone fruits, berries and pears across their 12-acre orchard. Each variety is selected not just for taste but for how it behaves when baked — firm enough to hold shape, sweet enough to need no added sugar.' },
      { step: 2, title: 'Harvested at Peak Ripeness',   desc: 'Fruit is picked only when fully ripe — no early harvesting to extend shelf life. This means tighter delivery windows, but the flavour difference is undeniable. A perfectly ripe apricot needs nothing added to taste like summer.' },
      { step: 3, title: 'Rotating Seasonal Menu',       desc: 'Our Seasonal Fruit Tart changes every 2–3 weeks depending on what is at its best. Strawberry in May, peach in July, fig in September, pear in November. If it is on our menu, it is at its absolute peak right now.' },
      { step: 4, title: 'Same-Day Farm to Bakery',      desc: 'Fruit is harvested in the early morning and driven directly to our bakery, arriving before noon the same day. We use it within 24 hours — never frozen, never stored. You taste the difference in every bite.' },
    ],
  },
];

export default function FarmersModal({ open, onClose }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const farmer = FARMERS[active];

  return (
    <div className="recipe-overlay" onClick={onClose}>
      <div className="recipe-modal" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="recipe-close" onClick={onClose}><FaTimes /></button>

        {/* Sidebar */}
        <div className="recipe-sidebar">
          <p className="recipe-sidebar-label">Our Farmers</p>
          {FARMERS.map((f, i) => (
            <button
              key={f.id}
              className={`recipe-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={f.image} alt={f.name} />
              <span>{f.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="recipe-content">
          <div className="recipe-hero-img" style={{ backgroundImage: `url(${farmer.image})` }}>
            <div className="recipe-hero-overlay" />
            <div className="recipe-hero-meta">
              <h2>{farmer.name}</h2>
              <div className="recipe-badges">
                <span>📍 {farmer.location}</span>
                <span>🌾 {farmer.supply}</span>
                <span>🤝 Partner since {farmer.since}</span>
              </div>
            </div>
          </div>

          <div className="recipe-steps">
            {farmer.steps.map(s => (
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
