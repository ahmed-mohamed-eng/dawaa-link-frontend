import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import Sizes from "@/types/Sizes.type";

export interface ViewBtnProps {
  size: Sizes;
}

const ViewBtn = (props: ViewBtnProps) => {
  return (
    <button className="p-4 rounded-xl bg-[#87BCD9] text-[#292D32] flex items-center justify-center">
      <MdOutlineRemoveRedEye fontSize={getFontSize(props.size)} />
    </button>
  );
};

export default ViewBtn;

function getFontSize(size: Sizes) {
  switch (size) {
    case "xs":
      return "1rem";
    case "sm":
      return "2rem";
    case "lg":
      return "3rem";
    case "xl":
      return "4rem";
    case "2xl":
      return "5rem";
    case "3xl":
      return "6rem";

    default:
      return "3rem";
  }
}
