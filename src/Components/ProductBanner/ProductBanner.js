import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import "../ImageSlider/styles.css";

const ProductBanner = () => {
  const { imgList, setSearchQuery } = useContext(Context);
  const [imgBanner, setImgBanner] = useState([]);

  useEffect(() => {
    if (imgList.length > 0) {
      setImgBanner(imgList[0].largeImageURL);
    }
  }, [imgList]);

  const bannerBg = {
    backgroundImage: imgBanner,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "30vh",
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchQuery(input);
  };

  return (
    <header
      className="w-full flex flex-col justify-center items-center"
      style={bannerBg}
    >
      <div className="px-4 lg:w-1/2 md:w-3/4 w-full h-full lg:h-1/2 md:h-3/4 flex flex-col justify-center items-center rounded-lg shadow-lg opacity-pink">
        <input
          onChange={handleChange}
          className="w-full rounded-full px-6 py-3 outline-none"
          type="text"
          placeholder="Search Images"
        />
      </div>
    </header>
  );
};

export default ProductBanner;
