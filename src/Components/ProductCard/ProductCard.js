import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const ProductCard = ({ img }) => {
  const { homeImgList } = useContext(Context);

  const imgHeight = {
    maxHeight: "16rem",
  };

  return (
    <React.Fragment>
      {homeImgList.length > 0 ? (
        <Link to={`/productDetailsPage=${img.id}`}>
          <div className="bg-lightBlue p-4 hover:shadow-lg hover:bg-blue">
            <img
              style={imgHeight}
              className="w-full mb-2"
              src={img.webformatURL}
              alt={img.tags}
            />
            <p className="text-gray-700 border-b border-gray-900 italic text-center">
              View Details
            </p>
          </div>
        </Link>
      ) : (
        <SkeletonLoader />
      )}
    </React.Fragment>
  );
};

export default ProductCard;
