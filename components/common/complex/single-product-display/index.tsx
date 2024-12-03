"use client";

import { useState } from "react";
import Link from "next/link";

import { GoHeart, GoHeartFill } from "react-icons/go";

import RatingComp from "@/components/common/simple/rating-comp";

import ISingleProduct from "@/types/products/single-product.interface";
import ImgDisplayComp from "../../simple/img-display-comp";
import TitleText from "../../simple/title-text";
import PriceText from "../../simple/price-text";

const SingleProductDisplay = (props: ISingleProduct) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="w-80 relative flex flex-col items-center space-y-4 border-2 border-slate-200 rounded-xl px-4 py-6">
      <ImgDisplayComp
        sizes="sm"
        srcURL={props.photo || props.imageURL || "/product.png"}
      />

      <button
        className="flex items-center justify-center p-3 absolute top-0 right-5 z-10"
        onClick={setIsFav.bind(null, !isFav)}
      >
        {isFav ? <GoHeartFill fontSize={25} /> : <GoHeart fontSize={25} />}
      </button>

      <div className="flex flex-col items-center space-y-2">
        <Link href={props.url} className="capitalize">
          <TitleText sizes="lg" text={props.name} />
        </Link>

        <PriceText currency="EGP" value={+props.price} sizes="xs" />

        {props.rating ? (
          <RatingComp count={props.rating.count} value={props.rating.value} />
        ) : null}
      </div>
    </div>
  );
};

export default SingleProductDisplay;
