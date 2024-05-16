{/*CustomSection recibe el parametro children, donde ira alojado todo lo que se desee introducir dentro de dicha seccion.*/}
{/*CustomSection permite ocultar secciones teniendo en cuenta el rango de vision del usuario.*/}

import { useState, useRef, useEffect} from 'react';

function CustomSection({ children }) {
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

export default CustomSection;
