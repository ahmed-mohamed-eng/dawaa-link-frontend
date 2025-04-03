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
          name={t("treatmentEquipment")}
          value={ProductCategories.TREATMENT_EQUIPMENT}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("apneaMonitor")}
          value={ProductCategories.APNEA_MONITOR}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("hospitalBed")}
          value={ProductCategories.HOSPITAL_BED}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("defibrillators")}
          value={ProductCategories.DEFIBRILLATORS}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("diagnosticEquipment")}
          value={ProductCategories.DIAGNOSTIC_EQUIPMENT}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("breastPump")}
          value={ProductCategories.BREAST_PUMP}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("surgicalSupplies")}
          value={ProductCategories.SURGICAL_SUPPLIES}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("dialysisMachine")}
          value={ProductCategories.DIALYSIS_MACHINE}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("ultrasonography")}
          value={ProductCategories.ULTRASONOGRAPHY}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("hemostaticInstruments")}
          value={ProductCategories.HEMOSTATIC_INSTRUMENTS}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("surgicalInstruments")}
          value={ProductCategories.SURGICAL_INSTRUMENTS}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />

        <SubCategoriesGroup
          name={t("pacemaker")}
          value={ProductCategories.PEACEMAKER}
          onSelect={(x) => setCategories(x as ProductCategories)}
        />
      </div>
    </div>
  );
};

export default CategoryListCheck;
