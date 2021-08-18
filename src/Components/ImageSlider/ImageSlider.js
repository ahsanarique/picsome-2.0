import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation]);

const ImageSlider = ({ imgSet }) => {
  const { setSearchQuery } = useContext(Context);

  const imgHeight = {
    maxHeight: "50vh",
  };

  const swiperTextBg = (index) => {
    if ((index + 1) % 2 !== 0) {
      return "opacity-pink";
    } else {
      return "opacity-blue";
    }
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
              <Link to={`/productListPage`}>
                <p
                  onClick={() => setSearchQuery(img.tags)}
                  className={`text-2xl inline border px-5 py-1 rounded-full border-gray-900 ${
                    (i + 1) % 2 !== 0
                      ? "hover:bg-blue hover:opacity-70"
                      : "hover:bg-pink hover:opacity-70"
                  }`}
                >
                  SHOP NOW!
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default ImageSlider;
