"use client";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import IProductColor from "@/types/products/ProductColor.interface";

export interface FilterColorSelectBoxProps {
  disabled?: boolean;
  onSelect?: (name: string) => void;
  colors: IProductColor[];
}

const FilterColorSelectBox = (props: FilterColorSelectBoxProps) => {
  const [selected, setSelected] = useState(false);

  const onClickCheck = (value: string) => {
    setSelected(!selected);

    if (props.onSelect) {
      props.onSelect(value);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-12">
      <button
        disabled={props.disabled}
        className="flex items-center justify-between space-x-4 disabled:cursor-not-allowed disabled:opacity-75 w-full"
      >
        {props.colors.map((co) => {
          return (
            <div
              key={uuid()}
              data-selected={selected || undefined}
              title={co.name}
              className="w-4 h-4 rounded-full bg-[#B3D4E5] data-[selected]:bg-[#3F3F3F] flex items-center justify-center"
              style={{
                background: co.value,
              }}
              onClick={() => onClickCheck(co.value)}
            />
          );
        })}
      </button>
    </div>
  );
};

export default FilterColorSelectBox;
