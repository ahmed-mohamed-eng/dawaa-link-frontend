import React, { useContext } from "react";
import { v4 as uuid } from "uuid";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import SingleProductDisplay from "@/components/common/complex/single-product-display";
import ISingleProduct from "@/types/products/single-product.interface";

export interface ArrangedProductsProps {
  data?: ISingleProduct[];
}

const ArrangedProducts = ({ data }: ArrangedProductsProps) => {
  const { arrangement } = useContext(ProductsDisplayContext);

  return (
    <div className="w-full">
      {arrangement === "one-per-row" ? (
        <div className="w-full grid gap-x-10 gap-y-10">
          {data?.map((v) => {
            return <SingleProductDisplay key={uuid()} {...v} />;
          })}
        </div>
      ) : null}

      {arrangement === "two-per-row" ? (
        <div className="w-full grid xl:grid-cols-2 gap-x-10 gap-y-10">
          {data?.map((v) => {
            return <SingleProductDisplay key={uuid()} {...v} />;
          })}
        </div>
      ) : null}

      {arrangement === "three-per-row" ? (
        <div className="w-full grid xl:grid-cols-3 gap-x-10 gap-y-10">
          {data?.map((v) => {
            return <SingleProductDisplay key={uuid()} {...v} />;
          })}
        </div>
      ) : null}

      {arrangement === "four-per-row" ? (
        <div className="w-full grid xl:grid-cols-4 gap-x-10 gap-y-10">
          {data?.map((v) => {
            return <SingleProductDisplay key={uuid()} {...v} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ArrangedProducts;
