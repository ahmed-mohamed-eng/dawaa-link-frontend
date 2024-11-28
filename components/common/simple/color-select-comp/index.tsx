"use client";

import React, { useState } from "react";

import IProductColor from "@/types/products/ProductColor.interface";

export interface ColorDisplayCompProps extends IProductColor {
  onSelectColor?: (code: string) => void;
}

const ColorSelectComp = (props: ColorDisplayCompProps) => {
  const [selected, setSelected] = useState(false);

  const onClickColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const colorCode = e.currentTarget.dataset?.code as string | undefined;

    if (!colorCode) {
      return;
    }

    setSelected(!selected);

    if (props.onSelectColor && selected) {
      props.onSelectColor(colorCode);
    }
  };

  return (
    <div
      className="p-1 rounded-full w-fit flex items-center justify-center"
      style={{
        borderColor: selected ? props.value : "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <button
        data-code={props.value}
        className="w-4 h-4 rounded-full"
        style={{ background: props.value }}
        onClick={onClickColor}
      />
    </div>
  );
};

export default ColorSelectComp;
