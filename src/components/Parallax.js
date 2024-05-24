import React, { useRef, useEffect } from 'react';
import { Col } from 'react-bootstrap';

const Parallax = ({ scrollPercentage, parallaxImages }) => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
        imageRefs.current.forEach((el, index) => {
          const { imgSpeed, imgOffsetX } = parallaxImages[index];
          const xPos = (scrollPercentage * imgSpeed) + imgOffsetX;
          el.style.transform = `translateX(${xPos}px)`;
        });
      };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPercentage]);

  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      const {imgOffsetX, imgOffsetY } = parallaxImages[index];
      const yPos = imgOffsetY;
      const xPos = imgOffsetX;
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {parallaxImages.map((image, index) => (
        <Col
          key={index}
          className={`position-absolute start-0 layer${index} ${image.repeatX ? 'repeat-x' : ''}`}
          ref={el => imageRefs.current[index] = el}
          style={{ bottom: 0, zIndex: index }}
        >
          <img
            src={image.imgSrc}
            alt=""
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
      ))}
    </div>
  );
};

export default Parallax;
