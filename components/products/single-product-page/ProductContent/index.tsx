import React from "react";

import ProductContentDisplay from "./ProductContentDisplay";
import SingleProductDisplay from "@/components/common/complex/single-product-display";

const ProductContent = () => {
  return (
    <div className="w-full lg:px-20 flex flex-col items-start justify-start space-y-24">
      <ProductContentDisplay />

      {/* Related Products */}
      <div className="w-full flex flex-col items-center justify-start space-y-24 pb-40">
        <h2 className="w-full text-center font-bold text-3xl text-[#023E8A]">
          Related Products
        </h2>

        <div className="w-full flex flex-col lg:flex-row items-start justify-start space-y-8 lg:space-y-0 lg:space-x-4">
          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
