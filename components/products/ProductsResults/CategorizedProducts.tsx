import React, { useContext } from "react";

import SortedProducts from "./SortedProducts";

import FilterContext from "@/contexts/FilterContext";
import ISingleProduct from "@/types/products/single-product.interface";
import ProductCategories from "@/types/categories.enum";

export interface CategorizedProductsProps {
  data?: ISingleProduct[];
}

const CategorizedProducts = ({ data }: CategorizedProductsProps) => {
  const { categories } = useContext(FilterContext);

  const areaMonitorProducts = data;
  const breastPumpProducts = data;
  const defibrillatorsProducts = data;
  const diagnosticEquipmentProducts = data;
  const dialysisMachineProducts = data;
  const hemostaticMachineProducts = data;
  const hospitalBedProducts = data;
  const peaceMakerProducts = data;
  const surgicalInstrumentsProducts = data;
  const surgicalSuppliesProducts = data;
  const treatMentEquipmentProducts = data;
  const ultrasonographyProducts = data;

  return (
    <div className="w-full">
      {categories === ProductCategories.ALL ? (
        <SortedProducts data={data} />
      ) : null}

      {categories === ProductCategories.APNEA_MONITOR ? (
        <SortedProducts data={areaMonitorProducts} />
      ) : null}

      {categories === ProductCategories.BREAST_PUMP ? (
        <SortedProducts data={breastPumpProducts} />
      ) : null}

      {categories === ProductCategories.DEFIBRILLATORS ? (
        <SortedProducts data={defibrillatorsProducts} />
      ) : null}

      {categories === ProductCategories.DIAGNOSTIC_EQUIPMENT ? (
        <SortedProducts data={diagnosticEquipmentProducts} />
      ) : null}

      {categories === ProductCategories.DIALYSIS_MACHINE ? (
        <SortedProducts data={dialysisMachineProducts} />
      ) : null}

      {categories === ProductCategories.HEMOSTATIC_INSTRUMENTS ? (
        <SortedProducts data={hemostaticMachineProducts} />
      ) : null}

      {categories === ProductCategories.HOSPITAL_BED ? (
        <SortedProducts data={hospitalBedProducts} />
      ) : null}

      {categories === ProductCategories.PEACEMAKER ? (
        <SortedProducts data={peaceMakerProducts} />
      ) : null}

      {categories === ProductCategories.SURGICAL_INSTRUMENTS ? (
        <SortedProducts data={surgicalInstrumentsProducts} />
      ) : null}

      {categories === ProductCategories.SURGICAL_SUPPLIES ? (
        <SortedProducts data={surgicalSuppliesProducts} />
      ) : null}

      {categories === ProductCategories.TREATMENT_EQUIPMENT ? (
        <SortedProducts data={treatMentEquipmentProducts} />
      ) : null}

      {categories === ProductCategories.ULTRASONOGRAPHY ? (
        <SortedProducts data={ultrasonographyProducts} />
      ) : null}
    </div>
  );
};

export default CategorizedProducts;
