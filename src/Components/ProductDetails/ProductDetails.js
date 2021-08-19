import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../../Context/Context";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import PurchaseNowBtn from "../Buttons/PurchaseNowBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentImg, setCurrentImg] = useState([]);
  const { getImages, imgPrice } = useContext(Context);

  const viewIcon = <FontAwesomeIcon icon={faEye} />;
  const likeIcon = <FontAwesomeIcon icon={faThumbsUp} />;
  const downLoadIcon = <FontAwesomeIcon icon={faDownload} />;

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=22966378-58fca9bf9b8bdf03001525418&id=${id}`;

    getImages(url, setCurrentImg);
  }, [id, getImages]);

  return (
    <div className="w-5/6 mx-auto my-12 p-4 rounded-lg bg-lightBlue shadow-xl ">
      {currentImg.map((img) => (
        <div
          className="flex w-full flex-wrap justify-between items-center flex-col md:flex-row"
          key={img.id}
        >
          <div className="w-full lg:w-1/3 p-4 bg-blue rounded-md">
            <img className="mx-auto" src={img.largeImageURL} alt={img.tags} />
            <div className="mt-4 flex justify-around">
              <p>
                {viewIcon} {img.views}
              </p>
              <p>
                {likeIcon} {img.likes}
              </p>
              <p>
                {downLoadIcon} {img.downloads}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center flex-wrap items-center lg:w-2/3 p-4">
            <div className="mb-12 w-full ">
              <div className="w-full text-center py-2 border-b border-gray-300">
                <p className="text-2xl">
                  Image ID: {img.id},{" "}
                  <span className="text-sm italic">Added by: {img.user}</span>
                </p>
              </div>

              <div className="w-full text-center mt-5">
                <p className="text-xl py-2 border-b border-gray-300">
                  Description:
                </p>
                <div className="flex flex-col md:flex-row justify-around">
                  <p className="text-lg py-2">
                    Resolution: {img.imageWidth} x {img.imageHeight} pixels
                  </p>
                  <p className="text-lg py-2">
                    Size: {(img.imageSize / 1000000).toFixed(2)} mb
                  </p>
                </div>

                <div className="mt-5 flex flex-col md:flex-row justify-around">
                  <p className="text-lg py-2">Price:</p>
                  <p className="text-lg py-2">${imgPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <AddToCartBtn />
            <PurchaseNowBtn />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
