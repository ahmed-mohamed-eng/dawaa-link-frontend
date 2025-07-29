import React from "react";

import { Link } from "@/i18n/routing";

import { FaCartShopping } from "react-icons/fa6";

const EmptyCart = () => {
  return (
    <div className="col-span-6 flex flex-col items-center justify-start space-y-4">
      <h1 className="w-full text-2xl text-center font-medium">
        Your Cart is Empty
      </h1>

      <FaCartShopping color="#208abb" fontSize={100} />

      <Link href="/" className="px-10 py-2 bg-black text-white rounded-lg">
        Fill It
      </Link>
    </div>
  );
};

export default EmptyCart;
