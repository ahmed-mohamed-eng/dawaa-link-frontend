"use client";

import { useLocale } from "next-intl";
import React, { useEffect } from "react";

import { redirect } from "@/i18n/routing";

import NavHeader from "@/components/home/NavHeader";
import Footer from "@/components/common/complex/footer";
import DisplayProductsPrices from "@/components/cart/DisplayProductsPrices";

import useFetchCartItems from "@/data-fetch-hooks/useFetchCartItems";

import getCookie from "@/utils/auth/getCookie";
import TokenName from "@/constants/TokenName";

export default function CartPage() {
  const locale = useLocale();
  const accessToken = getCookie(TokenName);
  const productItems = useFetchCartItems();

  useEffect(() => {
    if (!accessToken) {
      redirect({
        href: "/",
        locale,
      });
    }
  }, [accessToken, locale]);

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
