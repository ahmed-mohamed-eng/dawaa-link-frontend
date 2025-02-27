"use client";

import React from "react";

import NavHeader from "@/components/home/NavHeader";
import Footer from "@/components/common/complex/footer";
import DisplayProductsPrices from "@/components/cart/DisplayProductsPrices";

import useFetchCartItems from "@/data-fetch-hooks/useFetchCartItems";

export default function CartPage() {
  const productItems = useFetchCartItems();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col mb-10 border rounded-lg p-6">
        <DisplayProductsPrices products={productItems || []} />
      </main>

      <Footer />
    </div>
  );
}
