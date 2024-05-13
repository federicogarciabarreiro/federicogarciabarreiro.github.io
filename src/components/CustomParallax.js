import React from 'react';

function CustomParallax({ scrollPercentage, layers }) {
  return (
    <div className="CustomParallax">
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`Layer${index + 1}`}
          style={{
            backgroundImage: `url('${layer.image}')`,
            backgroundPositionX: `calc(${scrollPercentage * layer.speed}% + ${layer.offset})`
          }}
        ></div>
      ))}
    </div>
  );
}

export default CustomParallax;
