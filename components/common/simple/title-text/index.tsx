import React from "react";

import Sizes from "@/types/Sizes.type";

import getValueOfSize from "@/utils/getValueOfSize";

export interface TitleTextProps {
  sizes: Sizes;
  text: string;
}

const TitleText = (props: TitleTextProps) => {
  return (
    <h3
      className="text-[#003F62] font-semibold"
      style={{
        fontSize: getFontSize(props.sizes),
      }}
    >
      {props.text}
    </h3>
  );
};

function getFontSize(size: Sizes) {
  return getValueOfSize(size, [
    "0.25rem",
    "0.65rem",
    "0.75rem",
    "0.875rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
  ]);
}

export default TitleText;
