import Image from "next/image";
import React from "react";

export interface ImgDisplayCompProps {
  srcURL: string;
  sizes: "xs" | "sm" | "lg" | "xl";
  alt?: string;
  objectFit?: "cover" | "contain" | "fill";
}

const ImgDisplayComp = (props: ImgDisplayCompProps) => {
  const size = getImageSize(props.sizes);

  return (
    <div
      className="relative p-4"
      style={{
        width: size.w,
        height: size.h,
      }}
    >
      <Image
        alt={props.alt || "something to display"}
        src={props.srcURL}
        fill
        style={{ objectFit: props.objectFit || "contain" }}
      />
    </div>
  );
};

function getImageSize(size: string) {
  switch (size) {
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
