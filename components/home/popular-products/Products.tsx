"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import { GoHeart, GoHeartFill } from "react-icons/go";

import ISingleProduct from "@/types/products/single-product.interface";
import RatingComp from "@/components/common/rating-comp";

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

type SingleProductProps = ISingleProduct;

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

        <RatingComp count={props.rating.count} value={props.rating.value} />
      </div>
    </div>
  );
}
