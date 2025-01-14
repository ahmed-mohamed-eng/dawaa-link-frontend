"use client";

import React from "react";

export interface AddToCartBtnProps {
  productId: string | number;
}

const AddToCartBtn = (props: AddToCartBtnProps) => {
  const onAddToCart = () => {};

  return (
    <button
      data-product-id={props.productId}
      onClick={onAddToCart}
      className="border border-black py-4 px-2 text-black text-sm xl:text-xl font-bold col-span-2 xl:col-span-3 text-center"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
