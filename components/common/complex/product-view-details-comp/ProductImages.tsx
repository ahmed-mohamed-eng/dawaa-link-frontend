import React from "react";
import Image from "next/image";

import BorderedBox from "../../simple/bordered-box";

export interface ProductImagesProps {
  mainImageURL: string;
  leftSideSubImgURL: string;
  rightSideSubImgURL: string;
}

const ProductImages = (props: ProductImagesProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4">
      <BorderedBox className="p-4 row-span-3 col-span-2 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <Image
            alt="Main Product Image"
            src={props.mainImageURL}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </BorderedBox>

      <BorderedBox className="p-4 flex items-center justify-center">
        <div className="relative w-28 h-28">
          <Image
            alt="Main Product Image"
            src={props.leftSideSubImgURL}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </BorderedBox>

      <BorderedBox className="p-4 flex items-center justify-center">
        <div className="relative w-28 h-28">
          <Image
            alt="Main Product Image"
            src={props.rightSideSubImgURL}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </BorderedBox>
    </div>
  );
};

export default ProductImages;
