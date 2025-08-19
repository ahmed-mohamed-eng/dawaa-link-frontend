import React from "react";
import CartProductData from "@/types/cart/CartProductData.type";
import { useTranslations } from "next-intl";

export interface DisplayPricesSummaryProps {
  productList?: CartProductData[];
}

const DisplayPricesSummary = (props: DisplayPricesSummaryProps) => {
  const t = useTranslations("CartPage");

  const subTotalPrice = props.productList?.reduce((acc, product) => {
    return acc + parseInt(product.total_price_cart);
  }, 0);

  return (
    <div className="w-full col-span-2 flex flex-col items-start justify-start space-y-4">
      {/* Price Summary */}
      <div className="flex flex-col items-start justify-start space-y-4">
        <h1 className="text-2xl font-semibold">{t("priceSummary")}</h1>

        {/* Subtotal */}
        <div className="flex items-center justify-between w-full">
          <p>{t("subtotal")}</p>
          <p>
            <span>{subTotalPrice || 0}</span>
            <span className="symbol">&#xea;</span>
          </p>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between w-full">
          <p>{t("shipping")}</p>
          <p>
            <span>10</span>
            <span className="symbol">&#xea;</span>
          </p>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between w-full">
          <p>{t("total")}</p>
          <p>
            <span>{subTotalPrice ? subTotalPrice + 10 : 0}</span>
            <span className="symbol">&#xea;</span>
          </p>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-primary text-white rounded-lg py-2">
        {t("checkout")}
      </button>
    </div>
  );
};

export default DisplayPricesSummary;
