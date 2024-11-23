import React, { useMemo } from "react";

import { v4 as uuid } from "uuid";

import lodash from "lodash";
import Sizes from "@/types/Sizes.type";
import getValueOfSize from "@/utils/getValueOfSize";
import getFontSize from "@/utils/getFontSizeOfSize";

export interface ProductSizesProps {
  values: number[];
  size: Sizes;
}

const ProductSizes = (props: ProductSizesProps) => {
  const orderedValues = useMemo(() => {
    return lodash.sortedUniq(props.values);
  }, [props.values]);

  const elementSize = getElementSize(props.size);

  return (
    <div className="flex items-center justify-start space-x-4">
      {orderedValues.map((v) => {
        return (
          <div
            key={uuid()}
            className="bg-[#E2F4FF] text-[#EDA415] font-bold flex items-center justify-center rounded-full"
            style={{
              width: elementSize.w,
              height: elementSize.h,
              fontSize: getFontSize(props.size),
            }}
          >
            <p>{v}</p>
          </div>
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
