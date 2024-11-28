import React from "react";

import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const ProductViewDetailsComp = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-8">
      <ProductImages
        mainImageURL="/product.png"
        leftSideSubImgURL="/product.png"
        rightSideSubImgURL="/product.png"
      />

      <ProductDetails />
    </div>
  );
};

export default ProductViewDetailsComp;
