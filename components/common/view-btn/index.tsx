import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import Sizes from "@/types/Sizes.type";
import getFontSize from "@/utils/getFontSizeOfSize";

export interface ViewBtnProps {
  size: Sizes;
}

const ViewBtn = (props: ViewBtnProps) => {
  return (
    <button className="p-3 rounded-xl bg-[#87BCD9] text-[#292D32] flex items-center justify-center">
      <MdOutlineRemoveRedEye fontSize={getFontSize(props.size)} />
    </button>
  );
};

export default ViewBtn;
