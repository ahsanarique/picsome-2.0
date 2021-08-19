import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";

const ProductDetailPage = () => {
  const { imgList } = useContext(Context);
  const imgSet = imgList.slice(0, 4);

  return (
    <section>
      <ImageSlider imgSet={imgSet} />
      <ProductDetails />
    </section>
  );
};

export default ProductDetailPage;
