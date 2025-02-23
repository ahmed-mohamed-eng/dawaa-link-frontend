"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";

import ISingleProduct from "@/types/products/single-product.interface";

const SingleProductDisplay = (props: ISingleProduct) => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start space-y-8">
      {/* Product Image Container */}
      <div className="relative w-full h-96 border rounded-xl overflow-hidden group">
        <Image
          className="w-full h-full z-10"
          alt={props.name || "Product A"}
          src={props.photo || "/placeholder.png"}
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Sold Indicator */}
        {props.isSold ? (
          <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
            <span className="font-bold text-white">Sold</span>
          </div>
        ) : null}

        {/* New Indicator */}
        {props.isNew && !props.isSold && !props.discount ? (
          <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
            <span className="font-bold text-white">New</span>
          </div>
        ) : null}

        {/* Discount Indicator */}
        {props.discount && !props.isSold ? (
          <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
            <span className="font-bold text-white">{props.discount}%</span>
            <span className="font-bold text-white">Off</span>
          </div>
        ) : null}

        {/* Main Actions Container */}
        <div className="transition-all duration-200 ease-in absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
          {/* Add to Cart Button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
            Add To Cart
          </button>

          {/* Other Actions Button */}
          <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
            {/* Wishlist */}
            <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                alt="Add to Wishlist"
                src="/heart.svg"
                width={15}
                height={15}
              />
            </button>

            {/* Search */}
            <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                alt="Add to Wishlist"
                src="/search.svg"
                width={15}
                height={15}
              />
            </button>

            {/* Cart */}
            <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
              <Image
                alt="Add to Wishlist"
                src="/cart.svg"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full flex flex-col items-start justify-start">
        {/* Product Name */}
        {props.id ? (
          <Link
            href={`/products/${props.id}`}
            className="mt-4 font-bold text-lg"
          >
            {props.name}
          </Link>
        ) : (
          <p className="mt-4 font-bold text-lg">{props.name}</p>
        )}
        {/* Price */}
        <div className="mt-4 w-full flex items-center justify-start space-x-2 font-bold">
          {/* Previous Price */}
          <span className="text-[#8F8F8F]">{props.price}</span>
          {/* New Price */}
          <span>{props.final_price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDisplay;
