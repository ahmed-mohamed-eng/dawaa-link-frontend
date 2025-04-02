import { createContext } from "react";

import SetValueFunc from "@/types/setFunction.type";

import ProductCategories from "@/types/categories.enum";

type FilterContextType = {
  categories: ProductCategories;
  setCategories: SetValueFunc<ProductCategories>;
};

const FilterContext = createContext<FilterContextType>({
  categories: ProductCategories.ALL,
  setCategories: () => {},
});

export default FilterContext;
