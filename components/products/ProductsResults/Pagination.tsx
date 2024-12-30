"use client";

import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 10;

  return (
    <div className="w-full flex items-center justify-center">
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
        pageLinkClassName=""
        pageItemClassName="w-10 h-10 flex items-center justify-center text-black font-bold"
        activeItemClassName="text-white rounded-full bg-[#023E8A]"
      />
    </div>
  );
};

export default Pagination;
