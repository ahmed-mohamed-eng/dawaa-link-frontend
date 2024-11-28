import React, { useState } from "react";

import IValue from "@/types/value.interface";
import IOnSelectValue from "@/types/user-actions/onSelect.interface";

type Props = IValue<number> & IOnSelectValue<number>;

const SelectQuantity = (props: Props) => {
  const [quantity, setQuantity] = useState(props.value <= 0 ? 1 : props.value);

  const onClickIncreaseQuantity = () => {
    setQuantity(quantity + 1);

    props.onSelectValue?.call(null, quantity);
  };

  const onClickDecreaseQuantity = () => {
    if (quantity <= 1) {
      return;
    }

    setQuantity(quantity - 1);

    props.onSelectValue?.call(null, quantity);
  };

  return (
    <div className="flex items-center justify-start w-fit">
      <button
        onClick={onClickDecreaseQuantity}
        className="text-sm bg-[#EDEDED] text-black w-12 h-7"
      >
        -
      </button>
      <span className="text-sm bg-[#EDEDED] text-black  h-7 w-16 text-center flex items-center justify-center border-x border-black">
        {quantity}
      </span>
      <button
        onClick={onClickIncreaseQuantity}
        className="text-sm bg-[#EDEDED] text-black w-12 h-7 border flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default SelectQuantity;
