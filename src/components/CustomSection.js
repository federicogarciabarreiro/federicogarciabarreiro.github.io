import React, { useState, useRef, useEffect } from 'react';

import "../styles/CustomSection.css";

function CustomSection({ content, forceShow }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(forceShow);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [forceShow]);

  return (
    <section
      ref={sectionRef}
      className={`Section ${isVisible ? 'Show' : 'Hide'}`}
    >
      {content}
    </section>
  );
}

export default CustomSection;
