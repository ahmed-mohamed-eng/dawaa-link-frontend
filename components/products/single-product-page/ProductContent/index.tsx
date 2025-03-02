import React from "react";

import ProductContentDisplay from "./ProductContentDisplay";
import ISingleProduct from "@/types/products/single-product.interface";

export interface ProductContentProps {
  product: ISingleProduct;
}

const ProductContent = (props: ProductContentProps) => {
  return (
    <div className="w-full xl:px-20 flex flex-col items-start justify-start space-y-24">
      <ProductContentDisplay product={props.product} />
    </div>
  );
};

export default ProductContent;
