"use client";

import { useState } from "react";

import Image from "next/image";
import imgPlaceholderURL from "@/constants/imgPlaceholderURL";
import ISingleProduct from "@/types/products/single-product.interface";

interface IToBuyProductProps {
  product: ISingleProduct;
  amount: number;
  onAmountChange: (amount: number, id?: number) => void;
}

const ToBuyProduct = (props: IToBuyProductProps) => {
  const [updatedAmount, setUpdatedAmount] = useState(props.amount);

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < 1) return;

    setUpdatedAmount(newAmount);
    props.onAmountChange(newAmount, props.product.id);
  };

  return (
    <div className="flex items-start justify-between space-x-4">
      <div className="relative w-52 h-56 bg-gray-200 rounded-xl">
        <Image
          src={props.product.photo || imgPlaceholderURL()}
          alt="Product"
          className="w-full h-full"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Info, Price and amount */}
      <div className="h-full flex flex-col items-start justify-between p-4">
        <div className="flex flex-col items-start justify-start space-y-3">
          <h1 className="text-xl font-semibold">{props.product.name}</h1>
          <p>{props.product.description}</p>
        </div>

        {/* Amount and Price */}
        <div className="flex items-center justify-start space-x-4">
          {/* Amount */}
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handleAmountChange(updatedAmount - 1)}
              className="w-7 h-7 bg-gray-200 rounded-full"
            >
              -
            </button>
            <p>{updatedAmount}</p>
            <button
              onClick={() => handleAmountChange(updatedAmount + 1)}
              className="w-7 h-7 bg-gray-200 rounded-full"
            >
              +
            </button>
          </div>

          {/* Price */}
          <p className="text-lg font-semibold">
            EGP{props.product.final_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToBuyProduct;
