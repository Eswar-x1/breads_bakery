import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delayClass = "" }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Setup the browser intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it animates into view, disconnect the observer permanently
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the element body crosses screen frame bounds
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before entry for smooth pacing
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal-hidden ${isIntersecting ? 'reveal-visible' : ''} ${delayClass}`}
    >
      {children}
    </div>
  );
}