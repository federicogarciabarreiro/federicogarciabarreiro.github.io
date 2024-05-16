import { useState, useEffect} from 'react';

{/*CustomFooterButtons recibe scrollPercentage.*/}

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
      <button onClick={scrollToTop} className={`back-to-top ${visible ? 'visible' : ''}`}>
        ↑
      </button>
    </div>
  );
}

export default CustomFooterButtons;
