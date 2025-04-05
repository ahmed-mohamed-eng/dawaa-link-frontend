import React, { useContext } from "react";
import { useTranslations } from "next-intl";

import SubCategoriesGroup from "./SubCategoriesGroup";

import ProductCategories from "@/types/categories.enum";

import FilterContext from "@/contexts/FilterContext";

const CategoryListCheck = () => {
  const t = useTranslations("ProductsPage.CategoryListCheck");

  const { setCategories } = useContext(FilterContext);

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        {t("title")}
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-start justify-start space-y-8 px-6">
        <SubCategoriesGroup
          name={t("all")}
          value={ProductCategories.ALL}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("cosmetics")}
          value={ProductCategories.COSMETICS}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("medialEquipment")}
          value={ProductCategories.MEDICAL_EQUIPMENT}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("medicines")}
          value={ProductCategories.MEDICINES}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />
      </div>
    </div>
  );
};

export default CategoryListCheck;
