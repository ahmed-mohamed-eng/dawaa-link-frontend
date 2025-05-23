import { useTranslations } from "next-intl";
import React from "react";

export interface BuyButtonProps {
    productId: string | number;
}

const BuyButton = (props: BuyButtonProps) => {
  const t = useTranslations("ProductContent");
  
  return (
    <button data-product-id={props.productId} className="py-4 px-2 text-white bg-[#023E8A] text-sm xl:text-xl font-bold col-span-4 text-center">
      {t("buyButton")}
    </button>
  );
};

export default BuyButton;
