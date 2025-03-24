import React from "react";
import SubCategoriesGroup from "./SubCategoriesGroup";
import { useTranslations } from "next-intl";

const CategoryListCheck = () => {
  const t = useTranslations("ProductsPage.CategoryListCheck");

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        {t("title")}
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-start justify-start space-y-8 px-6">
        <SubCategoriesGroup
          name={t("treatmentEquipment")}
          value="treatment-equipment"
        />

        <SubCategoriesGroup name={t("apneaMonitor")} value="apnea-monitor" />

        <SubCategoriesGroup name={t("hospitalBed")} value="hospital-bed" />

        <SubCategoriesGroup name={t("defibrillators")} value="defibrillators" />

        <SubCategoriesGroup
          name={t("diagnosticEquipment")}
          value="diagnostic-equipment"
        />

        <SubCategoriesGroup name={t("breastPump")} value="breast-pump" />

        <SubCategoriesGroup
          name={t("surgicalSupplies")}
          value="surgical-supplies"
        />

        <SubCategoriesGroup
          name={t("dialysisMachine")}
          value="dialysis-machine"
        />

        <SubCategoriesGroup
          name={t("ultrasonography")}
          value="ultrasonography"
        />

        <SubCategoriesGroup
          name={t("hemostaticInstruments")}
          value="hemostatic-instruments"
        />

        <SubCategoriesGroup
          name={t("surgicalInstruments")}
          value="surgical-instruments"
        />

        <SubCategoriesGroup name={t("pacemaker")} value="pacemaker" />
      </div>
    </div>
  );
};

export default CategoryListCheck;
