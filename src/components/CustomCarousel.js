import React from 'react';
import { Carousel } from 'react-bootstrap';
import CustomSection from './CustomSection';

function CustomCarousel({ images }) {
    return (
        <CustomSection children={<Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.title}
                        />
                    </div>
                    <div className="carousel-caption-container">
                        <Carousel.Caption>
                            <h5 className=''>{image.title}</h5>
                            <p className=''>{image.description}</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>} />
    );
}

export default CustomCarousel;
