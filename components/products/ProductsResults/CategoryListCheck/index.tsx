import React from "react";
import SubCategoriesGroup from "./SubCategoriesGroup";

const CategoryListCheck = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        Categories
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-start justify-start space-y-8 px-6">
        <SubCategoriesGroup
          name="Treatment equipment"
          value="treatment-equipment"
        />

        <SubCategoriesGroup name="Apnea monitor" value="apnea-monitor" />

        <SubCategoriesGroup name="Hospital Bed" value="hospital-bed" />

        <SubCategoriesGroup name="Defibrillators" value="defibrillators" />

        <SubCategoriesGroup
          name="Diagnostic equipment"
          value="diagnostic-equipment"
        />

        <SubCategoriesGroup name="Breast Pump" value="breast-pump" />

        <SubCategoriesGroup
          name="Surgical supplies"
          value="surgical-supplies"
        />

        <SubCategoriesGroup name="Dialysis machine" value="dialysis-machine" />

        <SubCategoriesGroup name="Ultrasonography" value="ultrasonography" />

        <SubCategoriesGroup
          name="Hemostatic instruments"
          value="hemostatic-instruments"
        />

        <SubCategoriesGroup
          name="Surgical instruments"
          value="surgical-instruments"
        />

        <SubCategoriesGroup name="Pacemaker" value="pacemaker" />
      </div>
    </div>
  );
};

export default CategoryListCheck;
