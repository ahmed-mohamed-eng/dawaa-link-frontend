"use client";

import React from "react";
import { v4 as uuid } from "uuid";

import Products from "./Products";
import useFetchProducts from "@/data-fetch-hooks/useFetchProducts";
import useFetchCategories from "@/data-fetch-hooks/useFetchCategories";
import Link from "next/link";
import NavCircles from "@/components/common/simple/nav-circles";

const PopularProducts = () => {
  const { data: products } = useFetchProducts();

  const pages = Math.floor(products.length / 16);

  return (
    <div className="flex flex-col space-y-8 py-16 px-6">
      <Header />
      <Products
        products={products.map((p) => ({ ...p, url: `/products/${p.id}` }))}
      />

      {pages ? <NavCircles pageCount={pages} /> : null}
    </div>
  );
};

function Header() {
  const { data } = useFetchCategories();

  return (
    <div className="flex items-center justify-between">
      <p className="text-3xl font-bold text-primary">Popular products</p>

      <div className="flex items-center justify-start space-x-4 text-primary">
        {data.map((cat) => {
          return (
            <Link
              key={uuid()}
              href={`/categories/${cat.id}`}
              className="flex items-center justify-center px-10 py-2 rounded-xl border-2 border-slate-300 font-semibold"
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PopularProducts;
