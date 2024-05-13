import React from 'react';
import { Carousel } from 'react-bootstrap';

function SimpleCarousel({ images }) {
    return (
        <div className="carousel-container">
            <Carousel data-bs-theme="dark">
                {images.map((image, index) => (
                    <Carousel.Item key={index} className='carouselItem'>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.title}
                            style={{ height: '60vh', objectFit: 'cover' }}
                        />
                        <Carousel.Caption className>
                            <h5>{image.title}</h5>
                            <p>{image.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default SimpleCarousel;
