"use client";

import React, { useState } from "react";

export interface ProductQuantityProps {
  maxQuantity?: string | number;
  onChange?: (q: number) => void;
}

const ProductQuantity = (props: ProductQuantityProps) => {
  const [quantity, setQuantity] = useState(1);

  const onDecreaseValue = () => {
    if (quantity <= 1) {
      return;
    }

    setQuantity(quantity - 1);

    props.onChange?.call(null, quantity);
  };

  const onIncreaseValue = () => {
    const maxQuantity = parseInt(props.maxQuantity?.toString() || "", 10);

    if (maxQuantity && quantity >= maxQuantity) {
      return;
    }

    setQuantity(quantity + 1);

    props.onChange?.call(null, quantity);
  };

  return (
    <div className="col-span-2 xl:col-span-1 flex items-center justify-center gap-6 border border-black py-2 px-2 text-black text-sm xl:text-lg font-bold">
      <button onClick={onDecreaseValue}>-</button>
      <span>{quantity.toLocaleString()}</span>
      <button onClick={onIncreaseValue}>+</button>
    </div>
  );
};

export default ProductQuantity;
