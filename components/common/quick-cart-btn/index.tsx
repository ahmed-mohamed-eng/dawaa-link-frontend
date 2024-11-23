import React from "react";

import Sizes from "@/types/Sizes.type";
import getFontSize from "@/utils/getFontSizeOfSize";

import { IoCartOutline } from "react-icons/io5";

export interface QuickCartBtnProps {
  size: Sizes;
}

const QuickCartBtn = (props: QuickCartBtnProps) => {
  return (
    <button className="bg-[#87BCD9] p-4 rounded-xl flex items-center space-x-6 w-fit">
      <p
        className="font-semibold text-[#272727]"
        style={{ fontSize: getFontSize(props.size) }}
      >
        Add to cart
      </p>
      <div className="flex items-center justify-center p-2 text-white font-bold bg-[#EDA415] rounded-full">
        <IoCartOutline fontSize={getFontSize(props.size)} />
      </div>
    </button>
  );
};

export default QuickCartBtn;
