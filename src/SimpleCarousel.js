import { Carousel } from 'react-bootstrap';
import 'holderjs';

import './Carousel.css';

function SimpleCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='carouselItem'>
                {/*<img
                    className="d-block w-100"
                    src="holder.js/1920x400?text=Third slide&bg=e5e5e5"
                    alt="First slide"
                />*/}

                <img
                    className="d-block w-100"
                    src={require('./pics/first-slide.jpg')}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                {/*<img
                    className="d-block w-100"
                    src="holder.js/1920x400?text=Third slide&bg=e5e5e5"
                    alt="Second slide"
                />*/}

                <img
                    className="d-block w-100"
                    src={require('./pics/second-slide.jpg')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                {/*<img
                    className="d-block w-100"
                    src="holder.js/1920x400?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />*/}

                <img
                    className="d-block w-100"
                    src={require('./pics/third-slide.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SimpleCarousel;