"use client";

import { useContext } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";
import ISingleProduct from "@/types/products/single-product.interface";

export interface PaginationProps {
  data: ISingleProduct[];
}

const Pagination = ({ data }: PaginationProps) => {
  const { currentPage, setCurrentPage } = useContext(ProductsDisplayContext);

  const totalPages = Math.ceil(data?.length / 9) || 0;

  if (!data || data?.length <= 9 || !totalPages) {
    return null;
  }

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
