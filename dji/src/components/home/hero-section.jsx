import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import {homeProductsData} from "../home/homeProductsData";


const textVariants = {
  hidden: { opacity: 0, y: -40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit:   { opacity: 0, y: 40, transition: { duration: 0.35, ease: "easeIn" } },
};

const HeroSection = () => {
  const [active, setActive] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setActive(index), // trigger text re-anim
  };

  return (
    <div className="w-full">
      <div className="slider-container w-full h-screen hero-slider overflow-hidden relative">
        <Slider {...settings}>
          {homeProductsData.map((s, i) => (
            <div key={i} className="relative">
              <img
                src={s.img}
                alt={`Slide ${i + 1}`}
                className="w-full "
              />
              {/* Center overlay */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <AnimatePresence mode="wait" initial={false}>
                  {active === i && (
                    <motion.div
                      key={`slide-text-${i}-${active}`} // key forces re-anim
                      variants={textVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="flex flex-col items-center text-center -mt-40" 
                    >
                      <div className="text-lg text-gray-300">{s.small}</div>
                      <div className="text-5xl font-medium my-1 text-white">
                        {s.big}
                      </div>
                      <div className="text-xl font-medium text-white mb-6">
                        {s.sub}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <button className=" text-white  hover:bg-gray-200/40 transition-all h-10 px-6 rounded-full font-medium cutsom-pointer border-1 flex items-center justify-content-center">
                          Shop Now <MdKeyboardArrowRight className="text-xl" />
                        </button>
                        <button className="text-white hover:bg-gray-200/40 transition-all h-10 px-6 rounded-full font-medium cutsom-pointer border-1 flex items-center justify-content-center">
                          Learn More <MdKeyboardArrowRight className="text-xl" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;