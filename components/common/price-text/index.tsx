import React from "react";

import IPrice from "@/types/products/Price.interface";
import Sizes from "@/types/Sizes.type";
import getValueOfSize from "@/utils/getValueOfSize";

export interface PriceTextProps extends IPrice {
  sizes: Sizes;
}

const PriceText = (props: PriceTextProps) => {
  return (
    <p
      className="text-[#4A4A4A] font-semibold"
      style={{
        fontSize: getFontSize(props.sizes),
      }}
    >
      {props.currency}
      {props.value.toFixed(2)}
    </p>
  );
};

function getFontSize(size: Sizes) {
  return getValueOfSize(size, [
    "0.75rem",
    "0.875rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
  ]);
}

export default PriceText;
