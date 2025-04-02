"use client";

import { useTranslations } from "next-intl";
import { useContext } from "react";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import SortByOption from "@/types/sortByOption.enum";

const SortDisplay = () => {
  const t = useTranslations("ProductsPage.DisplayOptions");

  const { onSale, setOnSale, setSortBy } = useContext(ProductsDisplayContext);

  return (
    <div className="hidden xl:flex items-center justify-between px-8 py-5 flex-[4]">
      <div className="w-full flex items-center ltr:space-x-3 flex-1">
        <button
          data-selected={onSale || undefined}
          className="w-5 h-5 rounded bg-[#D9D9D9] data-[selected]:bg-[#023E8A] text-white font-bold text-xl flex items-center justify-center"
          onClick={() => setOnSale(!onSale)}
        >
          {onSale ? <p className="w-1 h-1 rounded-full bg-white" /> : null}
        </button>

        <p className="font-bold text-[#023E8A] text-lg rtl:mr-3">
          {t("title")}
        </p>
      </div>

      <div className="flex items-center justify-end space-x-2 flex-1">
        <select
          className="font-bold text-[#103178] outline-none cursor-pointer"
          onChange={(e) => {
            const value = e.target.value;

            if (value) {
              setSortBy(value as SortByOption);
            }
          }}
        >
          <option value="">{t("sortBy")}</option>
          <option value={SortByOption.LATEST}>Latest</option>
          <option value={SortByOption.HIGH_PRICE}>High Price</option>
          <option value={SortByOption.LOW_PRICE}>Low Price</option>
          <option value={SortByOption.OLDEST}>Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default SortDisplay;
