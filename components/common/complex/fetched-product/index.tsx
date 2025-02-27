"use client";

import React from "react";

import useFetchProducts from "@/data-fetch-hooks/products/useFetchSingleProduct";
import SingleProductDisplay from "../single-product-display";

export interface FetchedProductProps {
  productId: number;
}

const FetchedProduct = (props: FetchedProductProps) => {
  const { data: product } = useFetchProducts(props.productId);

  if (!product) {
    return null;
  }

  return <SingleProductDisplay {...product} />;
};

export default FetchedProduct;
