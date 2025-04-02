"use client";

import { useTranslations } from "next-intl";
import { useContext } from "react";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";

const DisplayResult = () => {
  const t = useTranslations("ProductsPage.DisplayOptions");

  const { resultsCount } = useContext(ProductsDisplayContext);

  return (
    <div className="flex items-center justify-start space-x-7 rtl:pe-8 ltr:ps-8 py-5 flex-1">
      <p className="font-bold text-xs space-x-2 xl:text-base text-[#103178]">
        <span>{t("resultCounts")}</span>
        <span>{resultsCount}</span>
      </p>
    </div>
  );
};

export default DisplayResult;
