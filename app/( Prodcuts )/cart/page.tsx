import React from "react";

import NavHeader from "@/components/home/NavHeader";
import Footer from "@/components/common/complex/footer";
import DisplayProductsPrices from "@/components/cart/DisplayProductsPrices";

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col mb-10 border rounded-lg p-6">
        <DisplayProductsPrices
          products={[
            {
              description: "some description",
              final_price: "100",
              name: "Panadol Extra",
              price: "30",
              quantity: "300",
              id: 1,
            },
            {
              description: "some description",
              final_price: "100",
              name: "Panadol Extra",
              price: "30",
              quantity: "300",
              id: 2,
            },
            {
              description: "some description",
              final_price: "100",
              name: "Panadol Extra",
              price: "30",
              quantity: "300",
              id: 3,
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
