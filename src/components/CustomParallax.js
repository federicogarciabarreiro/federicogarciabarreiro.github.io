import { useState, useEffect} from 'react';

{/*CustomParallax recibe scrollPercentage y tres arrays de objetos indicando diferentes offset y velocidades segun corresponda a la resolucion para mejorar la presicion*/}

function CustomParallax({ scrollPercentage, largeLayers, mediumLayers, smallLayers }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chooseLayersByResolution = () => {
    if (windowSize.width >= 769) {
      return largeLayers;
    } else if (windowSize.width >= 577) {
      return mediumLayers;
    } else {
      return smallLayers;
    }
  };

  const chosenLayers = chooseLayersByResolution();

  return (
    <div className="CustomParallax">
      {chosenLayers.map((layer, index) => (
        <div
          key={index}
          className={`Layer${index + 1}`}
          style={{
            backgroundImage: `url('${layer.image}')`,
            backgroundPositionX: `calc(${scrollPercentage * layer.speed}% + ${layer.offset})`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default CustomParallax;
