import React from "react";
import Image from "next/image";

import Sizes from "@/types/Sizes.type";

export interface ImgDisplayCompProps {
  srcURL: string;
  sizes: Sizes;
  alt?: string;
  objectFit?: "cover" | "contain" | "fill";
  containerClassName?: string;
  imgClassName?: string;
}

const ImgDisplayComp = (props: ImgDisplayCompProps) => {
  const size = getImageSize(props.sizes);

  return (
    <div
      className={`relative p-4 ${props.containerClassName || ""}`}
      style={{
        width: size.w,
        height: size.h,
      }}
    >
      <Image
        className={props.imgClassName}
        alt={props.alt || "something to display"}
        src={props.srcURL}
        fill
        style={{ objectFit: props.objectFit || "contain" }}
      />
    </div>
  );
};

function getImageSize(size: Sizes) {
  switch (size) {
    case "2xs":
      return { w: "3rem", h: "3rem" };
    case "xxs":
      return { w: "4rem", h: "4rem" };
    case "xs":
      return { w: "5rem", h: "5rem" };
    case "sm":
      return { w: "10rem", h: "10rem" };
    case "lg":
      return { w: "15rem", h: "15rem" };
    case "xl":
      return { w: "20rem", h: "20rem" };
    default:
      return { w: "10rem", h: "10rem" };
  }
}

export default ImgDisplayComp;
