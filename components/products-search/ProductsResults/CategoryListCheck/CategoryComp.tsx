"use client";

import React, { useState } from "react";

export interface CategoryCompProps {
  name: string;
  value: string;
  hasMore?: boolean;

  onChange?: (state: "open" | "close") => void;
  onSelect?: (value: string) => void;
}

const CategoryComp = (props: CategoryCompProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenCategory = () => {
    if (isOpen) {
      props.onChange?.call(null, "close");
    } else {
      props.onChange?.call(null, "open");
    }

    setIsOpen(!isOpen);
  };

  const onSelectValue = () => {
    props.onSelect?.call(null, props.value);
  };

  return (
    <div className="w-full flex items-center justify-between space-x-4">
      <button
        data-value={props.value}
        className="font-bold text-[#023E8A] text-lg"
        onClick={onSelectValue}
      >
        {props.name}
      </button>

      {props.hasMore ? (
        <button
          className="w-8 h-8 font-bold text-[#023E8A] text-lg bg-[#D9D9D9]"
          onClick={onOpenCategory}
        >
          {isOpen ? "-" : "+"}
        </button>
      ) : null}
    </div>
  );
};

export default CategoryComp;
