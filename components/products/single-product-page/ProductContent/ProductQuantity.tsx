"use client";

import React, { useState } from "react";

export interface ProductQuantityProps {
  onChange?: (q: number) => void;
}

const ProductQuantity = (props: ProductQuantityProps) => {
  const [quantity, setQuantity] = useState(0);

  const onDecreaseValue = () => {
    if (quantity <= 0) {
      return;
    }

    setQuantity(quantity - 1);

    props.onChange?.call(null, quantity);
  };

  const onIncreaseValue = () => {
    setQuantity(quantity + 1);

    props.onChange?.call(null, quantity);
  };

  return (
    <div className="col-span-1 flex items-center justify-center space-x-6 border border-black py-2 px-2 text-black text-lg font-bold">
      <button onClick={onDecreaseValue}>-</button>
      <span>{quantity.toLocaleString()}</span>
      <button onClick={onIncreaseValue}>+</button>
    </div>
  );
};

export default ProductQuantity;
