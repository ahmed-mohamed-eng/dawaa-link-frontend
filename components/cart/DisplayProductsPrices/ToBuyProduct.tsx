"use client";

// import { useState } from "react";

import Image from "next/image";
import validator from "validator";

import imgPlaceholderURL from "@/constants/imgPlaceholderURL";
import useFetchSingleProduct from "@/data-fetch-hooks/useFetchSingleProduct";

interface IToBuyProductProps {
  productId: number;
  amount: number;
}

const ToBuyProduct = (props: IToBuyProductProps) => {
  const { data: product } = useFetchSingleProduct(props.productId);

  return (
    <div className="flex items-start justify-between space-x-4">
      <div className="relative w-52 h-56 bg-gray-200 rounded-xl">
        {product?.photo && validator.isEmail(product?.photo) ? (
          <Image
            src={product?.photo || imgPlaceholderURL()}
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
          <h1 className="text-xl font-semibold">{product?.name}</h1>
          <p>{product?.description}</p>
        </div>

        {/* Amount and Price */}
        <div className="flex items-center justify-start space-x-4">
          {/* Amount */}
          <div className="flex items-center justify-center space-x-2">
            <p>{props.amount} Items</p>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold">SAR{product?.final_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ToBuyProduct;
