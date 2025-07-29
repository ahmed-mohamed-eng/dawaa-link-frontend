import React from "react";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const NavigationList = () => {
  const t = useTranslations("HeaderComponent");

  return (
    <div className="hidden xl:flex items-center gap-12 font-bold text-[#023E8A]">
      <Link
        href="/"
        data-selected={true}
        className="data-selected:text-[#FF922E] flex items-center justify-start gap-2"
      >
        {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
        <span>{t("home")}</span>
      </Link>
      <Link
        href="/about-us"
        data-selected={true}
        className="data-selected:text-[#FF922E] flex items-center justify-start gap-2"
      >
        {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
        <span>{t("aboutUs")}</span>
      </Link>
      <Link
        href="/products"
        data-selected={true}
        className="data-selected:text-[#FF922E] flex items-center justify-start gap-2"
      >
        {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
        <span>{t("products")}</span>
      </Link>
    </div>
  );
};

export default NavigationList;
