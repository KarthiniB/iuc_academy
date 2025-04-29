import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="slide_1.jpg" alt="slide1"/>
            </div>
            <div>
                <img src="slide_2.jpg" alt="slide2"/>
            </div>
            <div>
                <img src="slide_3.jpg" alt="slide3"/>
            </div>
        </Carousel>
    </div>
  );
};

export default ImageCarousel