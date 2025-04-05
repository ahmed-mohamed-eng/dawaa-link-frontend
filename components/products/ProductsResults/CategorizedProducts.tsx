import React, { useContext, useMemo } from "react";

import SortedProducts from "./SortedProducts";

import FilterContext from "@/contexts/FilterContext";
import ISingleProduct from "@/types/products/single-product.interface";
import ProductCategories from "@/types/categories.enum";

export interface CategorizedProductsProps {
  data?: ISingleProduct[];
}

const CategorizedProducts = ({ data }: CategorizedProductsProps) => {
  const { categories } = useContext(FilterContext);

  const cosmeticsProducts = useMemo(() => {
    return data?.filter(
      (product) => product.category?.name === ProductCategories.COSMETICS
    );
  }, [data]);

  const medicalEquipmentProducts = useMemo(() => {
    return data?.filter(
      (product) =>
        product.category?.name === ProductCategories.MEDICAL_EQUIPMENT
    );
  }, [data]);

  const medicinesProducts = useMemo(() => {
    return data?.filter(
      (product) => product.category?.name === ProductCategories.MEDICINES
    );
  }, [data]);

  return (
    <div className="w-full">
      {categories === ProductCategories.ALL ? (
        <SortedProducts data={data} />
      ) : null}

      {categories === ProductCategories.COSMETICS && cosmeticsProducts ? (
        <SortedProducts data={cosmeticsProducts} />
      ) : null}

      {categories === ProductCategories.MEDICAL_EQUIPMENT &&
      medicalEquipmentProducts ? (
        <SortedProducts data={medicalEquipmentProducts} />
      ) : null}

      {categories === ProductCategories.MEDICINES && medicinesProducts ? (
        <SortedProducts data={medicinesProducts} />
      ) : null}
    </div>
  );
};

export default CategorizedProducts;
