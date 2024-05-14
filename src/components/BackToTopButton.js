import React, { useState, useEffect } from 'react';

function BackToTopButton({ scrollPercentage }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollPercentage > 25);
  }, [scrollPercentage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <button onClick={scrollToTop} className={`back-to-top ${visible ? 'visible' : ''}`}>
        ↑
      </button>
    </div>
  );
}

export default BackToTopButton;
