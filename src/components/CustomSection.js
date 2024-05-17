{/*CustomSection recibe el parametro children, donde ira alojado todo lo que se desee introducir dentro de dicha seccion.*/}
{/*CustomSection permite ocultar secciones teniendo en cuenta el rango de vision del usuario.*/}

import React, { useState, useRef, useEffect } from 'react';

function CustomSection({ children, forceShow }) {
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
      {children}
    </section>
  );
}

export default CustomSection;
