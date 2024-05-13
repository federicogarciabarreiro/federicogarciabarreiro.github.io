import React from 'react';
import { Carousel } from 'react-bootstrap';

function SimpleCarousel({ images }) {
    const isSmallScreen = window.innerWidth < 768; 

    return (
        <Carousel data-bs-theme="dark" indicators={!isSmallScreen}>
            {images.map((image, index) => (
                <Carousel.Item key={index} className='carouselItem'>
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.title}
                        style={{ maxHeight: isSmallScreen ? '60vh' : '100vh' }}
                    />
                    <Carousel.Caption className={isSmallScreen ? 'd-none' : ''} style={{ maxHeight: isSmallScreen ? '40vh' : 'unset' }}>
                        <h5>{image.title}</h5>
                        <p>{image.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SimpleCarousel;
