"use client";

import React, { useState } from "react";

import { v4 as uuid } from "uuid";

export interface NavCircleProps {
  pageCount: number;
}

const NavCircles = (props: NavCircleProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onSelectPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = +(e.currentTarget.dataset?.num || "0");

    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center space-x-6">
      {[...Array(props.pageCount)].fill(0).map((_, idx) => {
        return (
          <div
            key={uuid()}
            data-num={idx}
            data-selected={idx === currentPage || undefined}
            className="w-4 h-4 bg-white data-[selected]:bg-secondary border border-secondary rounded-full cursor-pointer"
            onClick={onSelectPage}
          />
        );
      })}
    </div>
  );
};

export default NavCircles;
