"use client";

import { useState } from "react";

import ProductsList from "./ProductsList";
import DisplayPricesSummary from "./DisplayPricesSummary";
import ISingleProduct from "@/types/products/single-product.interface";

type Product = {
  id: number;
  amount: number;
};

export interface DisplayProductsPricesProps {
  products?: ISingleProduct[];
}

const DisplayProductsPrices = (props: DisplayProductsPricesProps) => {
  const [productsList, setProductsList] = useState<Product[]>();

  const prevProducts =
    (props.products
      ?.filter((v) => typeof v.id !== "undefined")
      ?.map((v) => ({ amount: 10, id: v.id })) as Product[]) || [];

  return (
    <div className="grid grid-cols-6 gap-4">
      <ProductsList
        onUpdateProductList={setProductsList}
        products={props.products}
      />
      <DisplayPricesSummary productList={productsList || prevProducts} />
    </div>
  );
};

export default DisplayProductsPrices;
