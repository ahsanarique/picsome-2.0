import React from "react";
import { buttonClass } from "./btnClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AddToCartBtn = () => {
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <button className={`${buttonClass} hover:bg-pink`}>
      {cartIcon} <span className="ml-2">ADD TO CART</span>
    </button>
  );
};

export default AddToCartBtn;
