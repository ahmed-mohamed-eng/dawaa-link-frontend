"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import { isURL } from "validator";

import imgPlaceholderURL from "@/constants/imgPlaceholderURL";
import useFetchSingleProduct from "@/data-fetch-hooks/useFetchSingleProduct";

interface IToBuyProductProps {
  productId: number;
  amount: number;
}

const ToBuyProduct = (props: IToBuyProductProps) => {
  const t = useTranslations("CartPage");

  const locale = useLocale();

  const { data: product } = useFetchSingleProduct(props.productId);

  const imgSrc = useMemo(() => {
    const imgFullUrl = `https://${product?.photo}`;
    if (!product?.photo) {
      return imgPlaceholderURL({ text: "D" });
    }

    const isValidImg = isURL(imgFullUrl, {
      require_host: true,
      require_protocol: true,
    });

    if (!isValidImg) {
      return imgPlaceholderURL({ text: "D" });
    }

    return imgFullUrl;
  }, [product?.photo]);

  const isArabic = locale === "ar";

  const productName = isArabic && product?.slug ? product?.slug : product?.name;

  return (
    <div className="flex items-start justify-between space-x-4">
      <div className="relative w-52 h-56 bg-gray-200 rounded-xl">
        {imgSrc ? (
          <Image
            src={imgSrc || imgPlaceholderURL()}
            alt="Product"
            className="w-full h-full"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : null}
      </div>

      {/* Info, Price and amount */}
      <div className="h-full flex flex-col items-start justify-between p-4">
        <div className="flex flex-col items-start justify-start space-y-3">
          <h1 className="text-xl font-semibold">{productName}</h1>
          <p>{product?.description}</p>
        </div>

        {/* Amount and Price */}
        <div className="flex flex-col items-start justify-start space-y-2">
          {/* Amount */}
          <div className="flex items-center justify-center space-x-2">
            <p>
              <span>{t("items")} :</span>
              <span className="mx-1 font-bold">{props.amount}</span>
            </p>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold">
            <span>{product?.final_price}</span>
            <span className="symbol">&#xea;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToBuyProduct;
