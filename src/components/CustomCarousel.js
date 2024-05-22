import { Carousel } from 'react-bootstrap';
import CustomSection from './CustomSection';

import "../styles/CustomCarousel.css";

{/*CustomCarousel recibe una array de objetos definida en constants.js, en este caso para obtener src-title-description*/ }

function CustomCarousel({ images }) {
    return (

        <div className="card">
            

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
                    </div>
       
    );
}

export default CustomCarousel;
