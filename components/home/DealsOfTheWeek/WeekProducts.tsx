"use client";

import React from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import Slider, { Settings, CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FetchedProduct from "@/components/common/complex/fetched-product";

export interface WeekProductsProps {
  productsIds: number[];
}

const WeekProducts = (props: WeekProductsProps) => {
  const settings: Settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    nextArrow: <NextArrowComp />,
    prevArrow: <PrevArrowComp />,

    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {props.productsIds.map((id) => {
          return (
            <div key={uuid()} className="px-4">
              <FetchedProduct productId={id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WeekProducts;

function NextArrowComp(props: CustomArrowProps) {
  return (
    <button className="absolute top-1/3 -right-10" onClick={props.onClick}>
      <Image
        alt="See Next"
        src="/icons/right-arrow-black.svg"
        width={16}
        height={32}
      />
    </button>
  );
}

function PrevArrowComp(props: CustomArrowProps) {
  return (
    <button className="absolute top-1/3 -left-10" onClick={props.onClick}>
      <Image
        alt="See Previous"
        src="/icons/left-arrow-black.svg"
        width={16}
        height={32}
      />
    </button>
  );
}
