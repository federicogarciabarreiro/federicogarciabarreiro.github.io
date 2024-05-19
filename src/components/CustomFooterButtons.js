import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import { SocialIcon } from 'react-social-icons';

import "../styles/CustomFooterButtons.css";

{/*CustomFooterButtons recibe scrollPercentage.*/ }

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
    <div className="custom-footer-buttons-container">
      <div className={`custom-social-icon-container ${visible ? 'visible' : ''}`}>
        <SocialIcon url="https://www.linkedin.com/in/fedegarbar/" className='custom-social-icon'/>
        <SocialIcon url="https://fedeegb.itch.io" className='custom-social-icon'/>
        <SocialIcon url="mailto:federicogarciabarreiro@gmail.com" className='custom-social-icon'/>
      </div>
      <div className={`custom-button-container ${visible ? 'visible' : ''}`}>
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
