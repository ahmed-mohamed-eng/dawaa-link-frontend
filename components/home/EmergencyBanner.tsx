import { useTranslations } from "next-intl";
import React from "react";

const EmergencyBanner = () => {
  const t = useTranslations("AboutUsPage.EmergencyBanner");

  return (
    <div className="pb-10 xl:pb-20 w-full">
      <div className="p-6 xl:p-0 w-full h-96 flex flex-col items-center justify-center space-y-8 xl:space-y-14 font-bold text-3xl xl:text-5xl text-white bg-[#403D39] rounded-2xl">
        <div className="w-full space-y-4">
          <h3 className="text-center">{t("title")}</h3>
          <h3 className="text-center">{t("info")}</h3>
        </div>

        <div className="w-full flex rtl:flex-row-reverse items-center justify-center space-x-8 text-lg">
          <button className="text-sm xl:text-base px-4 xl:px-8 py-2 rounded-full text-white bg-[#00A6FB]">
            {t("contactBtn")}
          </button>

          <button className="text-sm xl:text-base px-4 xl:px-8 py-2 rounded-full text-white bg-[#00A6FB]">
            {t("onlineOrder")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
