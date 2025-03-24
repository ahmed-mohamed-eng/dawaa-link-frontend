"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";

const SortDisplay = () => {
  const t = useTranslations("ProductsPage.DisplayOptions");

  const [selected, setSelected] = useState(false);

  return (
    <div className="hidden xl:flex items-center justify-between px-8 py-5 flex-[4]">
      <div className="w-full flex items-center ltr:space-x-3 flex-1">
        <button
          data-selected={selected || undefined}
          className="w-5 h-5 rounded bg-[#D9D9D9] data-[selected]:bg-[#023E8A] text-white font-bold text-xl flex items-center justify-center"
          onClick={() => setSelected(!selected)}
        >
          {selected ? <p className="w-1 h-1 rounded-full bg-white" /> : null}
        </button>

        <p className="font-bold text-[#023E8A] text-lg rtl:mr-3">
          {t("title")}
        </p>
      </div>

      <div className="flex items-center justify-end space-x-2 flex-1">
        <button className="font-bold text-[#103178]">{t("sortBy")}</button>
        <FaAngleDown fill="#103178" stroke="#103178" />
      </div>
    </div>
  );
};

export default SortDisplay;
