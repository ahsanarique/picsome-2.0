import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import MostPopularProducts from "../../Components/MostPopularProducts/MostPopularProducts";

const HomePage = () => {
  const { homeImgList } = useContext(Context);
  const imgSet = homeImgList.slice(0, 4);

  return (
    <section>
      <ImageSlider imgSet={imgSet} />
      <MostPopularProducts />
    </section>
  );
};

export default HomePage;
