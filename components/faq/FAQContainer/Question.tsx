"use client";

import React, { useState } from "react";

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";

export interface QuestionProps {
  question: string;
  answer: string;
}

const Question = (props: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={onToggle}
      data-open={isOpen || undefined}
      className="cursor-pointer w-full px-4 xl:pl-16 xl:pr-10 py-8 flex flex-col space-y-4 border border-[#8E8E8E] rounded-lg data-[open]:bg-[#00A6FB]"
    >
      <div className="w-full flex items-center justify-between">
        <h2
          className="text-sm xl:text-2xl capitalize"
          style={{
            color: isOpen ? "white" : "#023E8A",
          }}
        >
          {props.question} ?
        </h2>

        {isOpen ? (
          <GoArrowDownLeft fill="white" fontSize={25} />
        ) : (
          <GoArrowUpRight fill="#023E8A" fontSize={25} />
        )}
      </div>

      {isOpen ? <p className="w-full text-white font-thin">{props.answer}</p> : null}
    </div>
  );
};

export default Question;
