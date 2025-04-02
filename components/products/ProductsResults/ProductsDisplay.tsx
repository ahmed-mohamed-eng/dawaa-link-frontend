"use client";

import React, { useState } from "react";

import Pagination from "./Pagination";
import DisplayOptions from "./DisplayOptions";
import ProductsGroups from "./ProductsGroups";

import SortByOption from "@/types/sortByOption.enum";
import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import ProductsArrangementOptions from "@/types/productsArrangement.type";

const ProductsDisplay = () => {
  const [onSale, setOnSale] = useState(false);
  const [resultsCount, setResultsCount] = useState(0);
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
        setArrangement,
        setOnSale,
        setResultsCount,
        setSortBy,
      }}
    >
      <div className="w-full h-full col-span-4 xl:col-span-3 flex flex-col items-center justify-start space-y-6 xl:space-y-12">
        <DisplayOptions />
        <ProductsGroups />
        <Pagination />
      </div>
    </ProductsDisplayContext.Provider>
  );
};

export default ProductsDisplay;
