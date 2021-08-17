import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ img }) => {
  const imgHeight = {
    maxHeight: "16rem",
  };

  return (
    <Link to={`/productDetailsPage=${img.id}`}>
      <div className="bg-lightBlue p-4 hover:shadow-lg hover:bg-blue">
        <img
          style={imgHeight}
          className="w-full"
          src={img.webformatURL}
          alt={img.tags}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
