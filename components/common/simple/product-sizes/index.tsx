"use client";

import React, { useMemo } from "react";

import { v4 as uuid } from "uuid";

import lodash from "lodash";
import Sizes from "@/types/Sizes.type";
import getValueOfSize from "@/utils/getValueOfSize";
import getFontSize from "@/utils/getFontSizeOfSize";

export interface ProductSizesProps {
  values: number[];
  size: Sizes;
  onSelectSize?: (size: number) => void;
}

const ProductSizes = (props: ProductSizesProps) => {
  const orderedValues = useMemo(() => {
    return lodash.sortedUniq(props.values);
  }, [props.values]);

  const elementSize = getElementSize(props.size);

  const onSelectSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = +(e.currentTarget.dataset?.size || props.values[0]);

    if (props.onSelectSize) {
      props.onSelectSize(value);
    }
  };

  return (
    <div className="flex items-center justify-start space-x-4">
      {orderedValues.map((v) => {
        return (
          <button
            key={uuid()}
            data-size={v}
            className="bg-[#E2F4FF] text-[#EDA415] font-bold flex items-center justify-center rounded-full"
            onClick={onSelectSize}
            style={{
              width: elementSize.w,
              height: elementSize.h,
              fontSize: getFontSize(props.size),
            }}
          >
            <p>{v}</p>
          </button>
        );
      })}
    </div>
  );
};

export default ProductSizes;

function getElementSize(size: Sizes) {
  const values = [
    { w: "2rem", h: "2rem" },
    { w: "3rem", h: "3rem" },
    { w: "4rem", h: "4rem" },
    { w: "5rem", h: "5rem" },
    { w: "6rem", h: "6rem" },
    { w: "7rem", h: "7rem" },
    { w: "8rem", h: "8rem" },
  ];

  return getValueOfSize(size, values);
}
