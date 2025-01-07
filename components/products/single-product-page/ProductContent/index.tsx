import React from "react";

import ProductContentDisplay from "./ProductContentDisplay";

const ProductContent = () => {
  return (
    <div className="w-full px-20 flex flex-col items-start justify-start space-y-24">
      <ProductContentDisplay />

      {/* Related Products */}
      <div></div>
    </div>
  );
};

export default ProductContent;
