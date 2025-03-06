"use client";

import React from "react";

export interface FormCheckBoxProps {
  name: string;
  onChange?: (name: string, selected: boolean) => void;
  prevSelected?: boolean;
}

const FormCheckBox = (props: FormCheckBoxProps) => {
  const onChangeSelect = () => {
    props.onChange?.call(null, props.name, !props.prevSelected);
  };

  return (
    <div
      onClick={onChangeSelect}
      className="flex items-center justify-center space-x-4 cursor-pointer"
    >
      <div
        data-name={props.name}
        data-selected={props.prevSelected || undefined}
        className="w-6 h-6 rounded-md p-1 border border-[#00A6FB] data-[selected]:bg-[#00A6FB] bg-white"
      />

      <span>{props.name}</span>
    </div>
  );
};

export default FormCheckBox;
