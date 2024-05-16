{/*CustomFooterButtons recibe scrollPercentage.*/}

import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';

function CustomFooterButtons({ scrollPercentage }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollPercentage > 10);
  }, [scrollPercentage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className={`button-container ${visible ? 'visible' : ''}`}>
        <div className="social-media">
          <CustomButton buttonUrl="https://linkedin.com" buttonLabel="LinkedIn" className="linkedin" />
          <CustomButton buttonUrl="https://itch.io" buttonLabel="itch.io" className="itch-io" />
          <CustomButton buttonUrl="https://github.com" buttonLabel="GitHub" className="github" />
        </div>
        <CustomButton
          onClick={scrollToTop}
          buttonLabel="↑"
          className="back-to-top"
        />
      </div>
    </div>
  );
}

export default CustomFooterButtons;
