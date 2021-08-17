import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);

const ImageSlider = ({ imgSet }) => {
  const imgHeight = {
    maxHeight: "50vh",
  };

  const swiperTextBg = (index) => {
    if ((index + 1) % 2 !== 0) {
      return "opacity-pink";
    } else return "opacity-blue";
  };

  return (
    <header>
      <Swiper
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {imgSet.map((img, i) => (
          <SwiperSlide style={imgHeight} key={img.id}>
            <img
              className="w-full h-full object-cover relative"
              src={img.largeImageURL}
              alt=""
            />
            <div
              className={`z-40 ${swiperTextBg(
                i
              )} absolute px-4 lg:w-1/2 md:w-3/4 w-full text-left text-gray-900 h-full lg:h-1/2 md:h-3/4 flex flex-col justify-center shadow-lg`}
            >
              <p className="text-4xl">Placeholder Title</p>
              <p className="text-sm my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi exercitationem atque voluptatem voluptatum quas nam
                eum, laborum corrupti ipsam accusantium.
              </p>
              <p className="text-3xl">SHOP NOW!</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default ImageSlider;
