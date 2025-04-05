"use client";

import React, { useState } from "react";

import Pagination from "./Pagination";
import DisplayOptions from "./DisplayOptions";
import ProductsGroups from "./ProductsGroups";

import SortByOption from "@/types/sortByOption.enum";
import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import ProductsArrangementOptions from "@/types/productsArrangement.type";

import ISingleProduct from "@/types/products/single-product.interface";

export interface ProductsDisplayProps {
  products: ISingleProduct[];
}

const ProductsDisplay = ({ products }: ProductsDisplayProps) => {
  const [onSale, setOnSale] = useState(false);
  const [resultsCount, setResultsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrangement, setArrangement] =
    useState<ProductsArrangementOptions>("three-per-row");
  const [sortBy, setSortBy] = useState<SortByOption>(SortByOption.LATEST);

  return (
    <ProductsDisplayContext.Provider
      value={{
        sortBy,
        onSale,
        arrangement,
        resultsCount,
        currentPage,
        setCurrentPage,
        setArrangement,
        setOnSale,
        setResultsCount,
        setSortBy,
      }}
    >
      <div className="w-full h-full col-span-4 xl:col-span-3 flex flex-col items-center justify-start space-y-6 xl:space-y-12">
        <DisplayOptions />
        <ProductsGroups data={products} />
        <Pagination data={products} />
      </div>
    </ProductsDisplayContext.Provider>
  );
};

export default ProductsDisplay;
