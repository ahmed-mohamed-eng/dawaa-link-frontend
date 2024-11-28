"use client";

import React from "react";

import INameValue from "@/types/name-value.interface";
import IOnSelectValue from "@/types/user-actions/onSelect.interface";

export interface SizeSelectRadioProps
  extends INameValue<string>,
    IOnSelectValue<number | string> {

      
  selected?: boolean;
}

const SizeSelectRadio = (props: SizeSelectRadioProps) => {
  const onClickOption = () => {
    props.onSelectValue?.call(this, props.value);
  };

  return (
    <button
      data-selected={props.selected || undefined}
      onClick={onClickOption}
      className="text-sm bg-[#EDEDED] text-black w-fit py-0.5 px-4 border border-black data-[selected]:bg-black data-[selected]:text-white"
    >
      <span>{props.name}</span>
    </button>
  );
};

export default SizeSelectRadio;
