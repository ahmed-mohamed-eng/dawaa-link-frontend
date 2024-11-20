"use client";

import Image from "next/image";
import { v4 as uuid } from "uuid";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";

export interface ProductsProps {
  products: SingleProductProps[];
}

export default function Products(props: ProductsProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Products List */}
      {props.products.map((product) => {
        return (
          <SingleProduct
            key={uuid()}
            imageURL={product.imageURL}
            name={product.name}
            price={product.price}
            rating={product.rating}
            url={product.url}
          />
        );
      })}
    </div>
  );
}

type SingleProductProps = {
  imageURL: string;
  name: string;
  url: string;
  price: { value: number; currency: string };
  rating: {
    value: number;
    count: number;
  };
};

function SingleProduct(props: SingleProductProps) {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="relative flex flex-col items-center space-y-4 border-2 border-slate-200 rounded-xl px-4 py-6">
      <div className="w-24 h-24 p-4 relative">
        <Image
          alt="Product Image"
          src={props.imageURL}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <button
        className="flex items-center justify-center p-3 absolute top-0 right-5 z-10"
        onClick={setIsFav.bind(null, !isFav)}
      >
        {isFav ? <GoHeartFill fontSize={25} /> : <GoHeart fontSize={25} />}
      </button>

      <div className="flex flex-col space-y-2">
        <Link
          href={props.url}
          className="text-primary font-bold text-xl w-full text-center"
        >
          {props.name}
        </Link>
        <p className="text-lg text-center">
          {props.price.currency}
          {props.price.value}
        </p>

        <div className="flex items-center justify-center w-full">
          {Array(5)
            .fill(0)
            .map((_v, idx) => {
              return (
                <svg
                  key={uuid()}
                  data-active={
                    idx + 1 <= Math.floor(props.rating.value) || undefined
                  }
                  className="w-5 h-5 text-gray-300 data-[active]:text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}

          <p className="ml-4">({props.rating.count})</p>
        </div>
      </div>
    </div>
  );
}
