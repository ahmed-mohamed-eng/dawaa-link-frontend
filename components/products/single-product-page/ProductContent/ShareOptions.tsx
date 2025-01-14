import React from "react";

export interface ShareOptionsProps {
    productId: string | number;
}

const ShareOptions = (props: ShareOptionsProps) => {
  return (
    <div className="w-full flex items-center justify-start space-x-10 font-bold text-black text-lg">
      <span>Share</span>

      <div className="flex items-center justify-start divide-x divide-black">
        <button data-product-id={props.productId} className="pr-3">FB</button>
        <button data-product-id={props.productId} className="px-3">YU</button>
        <button data-product-id={props.productId} className="px-3">TW</button>
        <button data-product-id={props.productId} className="pl-3">IN</button>
      </div>
    </div>
  );
};

export default ShareOptions;
