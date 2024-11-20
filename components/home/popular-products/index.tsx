import React from "react";

import Products from "./Products";

const PopularProducts = () => {
  return (
    <div className="flex flex-col space-y-8 py-16 px-6">
      <Header />
      <Products
        products={[
          {
            imageURL: "/product.png",
            name: "Pro Camera",
            price: { currency: "$", value: 2000 },
            rating: { count: 30, value: 4.2 },
            url: "/products/1",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-3xl font-bold text-primary">Popular products</p>

      <div className="flex items-center justify-start space-x-4 text-primary">
        <p className="flex items-center justify-center px-10 py-2 rounded-xl border-2 border-slate-300 font-semibold">
          Cameras
        </p>
        <p className="flex items-center justify-center px-10 py-2 rounded-xl border-2 border-slate-300 font-semibold">
          Cameras
        </p>
        <p className="flex items-center justify-center px-10 py-2 rounded-xl border-2 border-slate-300 font-semibold">
          Cameras
        </p>
        <p className="flex items-center justify-center px-10 py-2 rounded-xl border-2 border-slate-300 font-semibold">
          Cameras
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex items-center justify-center space-x-6">
      <div className="w-4 h-4 bg-secondary rounded-full cursor-pointer" />
      <div className="w-4 h-4 bg-white border border-secondary rounded-full cursor-pointer" />
      <div className="w-4 h-4 bg-white border border-secondary rounded-full cursor-pointer" />
    </div>
  );
}

export default PopularProducts;
