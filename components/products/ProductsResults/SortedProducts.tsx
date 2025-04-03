import React, { useContext, useMemo } from "react";
import { DateTime } from "luxon";

import OnSaleProducts from "./OnSaleProducts";

import ISingleProduct from "@/types/products/single-product.interface";
import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import SortByOption from "@/types/sortByOption.enum";

export interface SortedProductsProps {
  data?: ISingleProduct[];
}

const SortedProducts = ({ data }: SortedProductsProps) => {
  const { sortBy } = useContext(ProductsDisplayContext);

  const latestProducts = useMemo(() => {
    const products =
      data?.filter((v) => typeof v.created_at !== "undefined") || [];

    products.sort((a, b) => {
      const aMills = a.created_at
        ? DateTime.fromFormat(a.created_at, "dd-LL-yyyy").toMillis()
        : DateTime.now().toMillis();

      const bMills = b.created_at
        ? DateTime.fromFormat(b.created_at, "dd-LL-yyyy").toMillis()
        : DateTime.now().toMillis();

      return bMills - aMills;
    });

    return products;
  }, [data]);

  const oldestProducts = useMemo(() => {
    const products =
      data?.filter((v) => typeof v.created_at !== "undefined") || [];

    products.sort((a, b) => {
      const aMills = a.created_at
        ? DateTime.fromFormat(a.created_at, "dd-LL-yyyy").toMillis()
        : DateTime.now().toMillis();

      const bMills = b.created_at
        ? DateTime.fromFormat(b.created_at, "dd-LL-yyyy").toMillis()
        : DateTime.now().toMillis();

      return aMills - bMills;
    });

    return products;
  }, [data]);

  const highestPriceProducts = useMemo(() => {
    const products =
      data?.filter((v) => typeof v.created_at !== "undefined") || [];

    products.sort((a, b) => {
      const parsedA = parseFloat(b?.final_price || "0");
      const parsedB = parseFloat(a?.final_price || "0");

      return parsedA - parsedB;
    });

    return products;
  }, [data]);

  const lowestPriceProducts = useMemo(() => {
    const products =
      data?.filter((v) => typeof v.created_at !== "undefined") || [];

    products.sort((a, b) => {
      const parsedA = parseFloat(b?.final_price || "0");
      const parsedB = parseFloat(a?.final_price || "0");

      return parsedB - parsedA;
    });

    return products;
  }, [data]);

  return (
    <div className="w-full">
      {sortBy === SortByOption.LATEST ? (
        <OnSaleProducts data={latestProducts} />
      ) : null}

      {sortBy === SortByOption.HIGH_PRICE ? (
        <OnSaleProducts data={highestPriceProducts} />
      ) : null}
      {sortBy === SortByOption.LOW_PRICE ? (
        <OnSaleProducts data={lowestPriceProducts} />
      ) : null}
      {sortBy === SortByOption.OLDEST ? (
        <OnSaleProducts data={oldestProducts} />
      ) : null}
    </div>
  );
};

export default SortedProducts;
