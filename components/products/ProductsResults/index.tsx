"use client";
import { useState } from "react";

// import Brands from "./Brands";
// import Ratings from "./Ratings";
// import PriceRange from "./PriceRange";
// import AdvertiseImage from "./AdvertiseImage";

import ProductsDisplay from "./ProductsDisplay";
import CategoryListCheck from "./CategoryListCheck";

import FilterContext from "@/contexts/FilterContext";
import ProductCategories from "@/types/categories.enum";

const ProductsResults = () => {
  const [categories, setCategories] = useState<ProductCategories>(
    ProductCategories.ALL
  );

  return (
    <FilterContext.Provider value={{ categories, setCategories }}>
      <div className="pb-10 xl:pb-40 xl:px-10 w-full grid grid-cols-4 gap-x-8">
        {/* Filters */}
        <div className="hidden col-span-1 xl:flex flex-col space-y-14">
          <CategoryListCheck />
          {/* <PriceRange /> */}
          {/* <Brands /> */}
          {/* <Ratings /> */}
          {/* <AdvertiseImage /> */}
        </div>

        <ProductsDisplay />
      </div>
    </FilterContext.Provider>
  );
};

export default ProductsResults;
