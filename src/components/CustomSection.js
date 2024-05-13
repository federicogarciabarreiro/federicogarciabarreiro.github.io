import React, { useRef, useEffect, useState } from 'react';

function Section({ children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`Section ${isVisible ? 'Show' : 'Hide'}`}>
      {children}
    </section>
  );
}

export default Section;
