import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
    <div className="w-full">
      <div className="slider-container w-full h-screen hero-slider overflow-hidden relative">
        <Slider {...settings}>
          <div>
            <img src="images/banner1.jpg" alt="Slide 1" className="w-full h-screen object-cover" />
          </div>
          <div>
            <img src="images/banner2.jpg" alt="Slide 2" className="w-full h-screen object-cover" />
          </div>
          <div>
            <img src="images/banner3.jpg" alt="Slide 3" className="w-full h-screen object-cover" />
          </div>
          
        </Slider>
      
    
      </div>
    </div>
    </>
  );
};

export default HeroSection
