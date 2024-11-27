import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

export interface FilterSelectBoxProps {
  name: string;
  count: number;
  disabled?: boolean;
  onSelect?: (name: string) => void;
}

const FilterSelectBox = (props: FilterSelectBoxProps) => {
  const [selected, setSelected] = useState(false);

  const onClickCheck = () => {
    setSelected(!selected);

    if (props.onSelect) {
      props.onSelect(props.name);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-12">
      <button
        disabled={props.disabled}
        onClick={onClickCheck}
        className="flex items-center justify-start space-x-4 disabled:cursor-not-allowed disabled:opacity-75"
      >
        <div
          data-selected={selected || undefined}
          className="w-8 h-8 bg-[#B3D4E5] data-[selected]:bg-[#3F3F3F] rounded-lg flex items-center justify-center"
        >
          {selected ? <FaCheck fill="white" fontSize={15} /> : null}
        </div>

        <p className="text-[#222222] font-medium">{props.name}</p>
      </button>

      <span
        data-disabled={props.disabled}
        className="text-[#222222] font-medium data-disabled:text-gray-900"
      >
        {props.count}
      </span>
    </div>
  );
};

export default FilterSelectBox;
