import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import ProductCard from "../ProductCard/ProductCard";
import "../ImageSlider/styles.css";

const ProductList = () => {
  const { imgList, searchQuery } = useContext(Context);

  return (
    <div className="grid grid-cols-12 gap-2 my-12 mx-5">
      <h2 className="text-xl col-span-12 mb-5 text-gray-700 text-center italic font-medium border-b-2 py-2 border-gray-700">
        {searchQuery !== "" ? searchQuery : "Most Popular"}
      </h2>
      {imgList.map((img) => (
        <div
          key={img.id}
          className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6"
        >
          <ProductCard img={img} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
