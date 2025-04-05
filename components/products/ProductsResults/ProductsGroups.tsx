"use client";

import React, { useContext, useEffect } from "react";

import CategorizedProducts from "./CategorizedProducts";

import useFetchProducts from "@/data-fetch-hooks/useFetchProducts";
import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";

const ProductsGroups = () => {
  const { data } = useFetchProducts();

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

  return <CategorizedProducts data={displayedProducts} />;
};

export default ProductsGroups;

// CategorizedProducts
