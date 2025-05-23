import React from "react";
import { useTranslations } from "next-intl";

export interface ShareOptionsProps {
    productId: string | number;
}

const ShareOptions = (props: ShareOptionsProps) => {
  const t = useTranslations("ProductContent");

  return (
    <div className="w-full flex items-center justify-start gap-10 font-bold text-black text-lg">
      <span>{t("share")}</span>

      <div className="flex items-center justify-start divide-x divide-black rtl:flex-row-reverse">
        <button data-product-id={props.productId} className="pr-3" >FB</button>
        <button data-product-id={props.productId} className="px-3" >YU</button>
        <button data-product-id={props.productId} className="px-3" >TW</button>
        <button data-product-id={props.productId} className="pl-3" >IN</button>
      </div>
    </div>
  );
};

export default ShareOptions;
