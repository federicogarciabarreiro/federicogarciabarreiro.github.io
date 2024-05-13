import React from 'react';
import { Carousel } from 'react-bootstrap';

function SimpleCarousel({ images }) {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.title}
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>{image.title}</h5>
                        <p>{image.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SimpleCarousel;
