import React from "react";
import ProductBanner from "../../Components/ProductBanner/ProductBanner";
import ProductList from "../../Components/ProductList/ProductList";

const ProductListPage = () => {
  return (
    <React.Fragment>
      <ProductBanner />
      <ProductList />
    </React.Fragment>
  );
};

export default ProductListPage;
