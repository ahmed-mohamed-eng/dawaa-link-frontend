import { createContext } from "react";

import SetValueFunc from "@/types/setFunction.type";
import SortByOption from "@/types/sortByOption.enum";
import ProductsArrangementOptions from "@/types/productsArrangement.type";

type ProductsDisplayContextType = {
  arrangement: ProductsArrangementOptions;
  setArrangement: SetValueFunc<ProductsArrangementOptions>;

  onSale: boolean;
  setOnSale: SetValueFunc<boolean>;

  sortBy: SortByOption;
  setSortBy: SetValueFunc<SortByOption>;

  resultsCount: number;
  setResultsCount: SetValueFunc<number>;

  currentPage: number;
  setCurrentPage: SetValueFunc<number>;
};

const ProductsDisplayContext = createContext<ProductsDisplayContextType>({
  arrangement: "three-per-row",
  resultsCount: 0,
  onSale: false,
  sortBy: SortByOption.LATEST,
  currentPage: 1,
  setCurrentPage: () => {},

  setArrangement: () => {},
  setResultsCount: () => {},
  setSortBy: () => {},
  setOnSale: () => {},
});

export default ProductsDisplayContext;
