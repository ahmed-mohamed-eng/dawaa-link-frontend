"use client";

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

import FormCheckBox from "./FormCheckBox";

export interface SelectCompanyFieldProps {
  onFieldsChange?: (x: string[]) => void;
}

const SelectCompanyField = (props: SelectCompanyFieldProps) => {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const onAddField = (name: string, selected: boolean) => {
    if (!name) {
      return;
    }

    let arr = Array.from(selectedFields);

    if (!selected) {
      arr = arr.filter((v) => v !== name);
    } else {
      arr.push(name);
    }

    props.onFieldsChange?.call(null, arr);
    setSelectedFields(arr);
  };

  const onRemoveField = (name: string) => {
    let remArr = Array.from(selectedFields);

    remArr = remArr.filter((v) => v !== name);

    setSelectedFields(remArr);

    props.onFieldsChange?.call(null, remArr);
  };

  return (
    <div className="relative w-full p-4 rounded-lg bg-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full flex items-center justify-between space-x-4 text-black"
      >
        <div className="flex items-center justify-start space-x-4">
          {selectedFields?.map((field) => (
            <p
              key={uuid()}
              className="px-6 py-1 rounded-md border flex items-center justify-start space-x-2"
              onClick={() => onRemoveField(field)}
            >
              <span>{field}</span>

              <IoIosClose fontSize={20} />
            </p>
          ))}
        </div>

        {isOpen ? (
          <FaAngleUp fontSize={25} fill="#00A6FB" />
        ) : (
          <FaAngleDown fontSize={25} fill="#00A6FB" />
        )}
      </div>

      {isOpen ? (
        <div className="w-full p-4 bg-white rounded-b-xl absolute top-[95%] left-0 text-black space-y-4">
          <div className="flex items-center justify-start space-x-4">
            <FormCheckBox
              name="Main Category"
              onChange={onAddField}
              prevSelected={!!selectedFields.find((v) => v === "Main Category")}
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <FormCheckBox
              name="Medical Equipments"
              onChange={onAddField}
              prevSelected={
                !!selectedFields.find((v) => v === "Medical Equipments")
              }
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <FormCheckBox
              name="Drugs"
              onChange={onAddField}
              prevSelected={!!selectedFields.find((v) => v === "Drugs")}
            />
          </div>
          <div className="flex items-center justify-start space-x-4">
            <FormCheckBox
              name="Cosmetics"
              onChange={onAddField}
              prevSelected={!!selectedFields.find((v) => v === "Cosmetics")}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectCompanyField;
