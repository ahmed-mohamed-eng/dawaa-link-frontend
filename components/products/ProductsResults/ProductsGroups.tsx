"use client";

import React, { useContext, useEffect } from "react";

import CategorizedProducts from "./CategorizedProducts";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import ISingleProduct from "@/types/products/single-product.interface";

export interface ProductsGroupsProps {
  data: ISingleProduct[];
}

const ProductsGroups = ({ data }: ProductsGroupsProps) => {
  const { setResultsCount, currentPage } = useContext(ProductsDisplayContext);

  const displayedProducts = data.slice(currentPage - 1, currentPage + 8);

  useEffect(() => {
    if (data?.length) {
      setResultsCount(data.length);
    }

    return () => {
      setResultsCount(0);
    };
  }, [data.length, setResultsCount]);

  if (!data.length) {
    return (
      <div className="w-full">
        <h1 className="w-full text-center text-3xl font-bold">
          No Products Found
        </h1>
      </div>
    );
  }

  return <CategorizedProducts data={displayedProducts} />;
};

export default ProductsGroups;

// CategorizedProducts
