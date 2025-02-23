"use client";

import React from "react";
import Image from "next/image";

import { Link } from "@/i18n/routing";

import useFetchCartItems from "@/data-fetch-hooks/useFetchCartItems";

const CartIcon = () => {
  const products = useFetchCartItems();

  const itemsCount = products[0].product_carts.length || 0;

  return (
    <div className="relative p-2">
      <Link href="/cart">
        <Image alt="Go to Cart" src="/cart.svg" width={25} height={25} />
      </Link>
      {itemsCount > 0 ? (
        <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
          {itemsCount}
        </span>
      ) : null}
    </div>
  );
};

export default CartIcon;
