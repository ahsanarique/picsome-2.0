import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import MostPopularProducts from "../../Components/MostPopularProducts/MostPopularProducts";

const HomePage = () => {
  const { popularImg } = useContext(Context);
  const imgSet = popularImg.slice(0, 4);

  return (
    <section>
      <ImageSlider imgSet={imgSet} />
      <MostPopularProducts />
    </section>
  );
};

export default HomePage;
