import { Carousel } from 'react-bootstrap';
import 'holderjs';

import './Carousel.css';

function SimpleCarousel({ img0, img1, img2, t1, t2, t3, d1, d2, d3 }) {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item className='carouselItem'>
                <img
                    className="d-block w-100"
                    src={img0}
                    alt={t1}
                />
                <Carousel.Caption>
                    <h5>{t1}</h5>
                    <p>{d1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt={t2}
                />
                <Carousel.Caption>
                    <h5>{t2}</h5>
                    <p>{d2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt={t3}
                />
                <Carousel.Caption>
                    <h5>{t3}</h5>
                    <p>{d3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SimpleCarousel;