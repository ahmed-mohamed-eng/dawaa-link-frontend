import React, { useContext, useMemo } from "react";

import ArrangedProducts from "./ArrangedProducts";

import ISingleProduct from "@/types/products/single-product.interface";
import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";

export interface OnSaleProductsProps {
  data?: ISingleProduct[];
}

const OnSaleProducts = ({ data }: OnSaleProductsProps) => {
  const { onSale } = useContext(ProductsDisplayContext);

  const sortedData = useMemo(() => {
    return data?.filter((v) => parseInt(v.quantity) > 0);
  }, [data]);

  return (
    <div className="w-full">
      {!onSale ? <ArrangedProducts data={data} /> : null}
      {onSale ? <ArrangedProducts data={sortedData} /> : null}
    </div>
  );
};

export default OnSaleProducts;
