import React from "react";

export interface BuyButtonProps {
    productId: string | number;
}

const BuyButton = (props: BuyButtonProps) => {
  return (
    <button data-product-id={props.productId} className="py-4 px-2 text-white bg-[#023E8A] text-sm xl:text-xl font-bold col-span-4 text-center">
      Buy Now
    </button>
  );
};

export default BuyButton;
