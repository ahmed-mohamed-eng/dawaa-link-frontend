"use client";

import React from "react";

import SingleProductDisplay from "@/components/common/complex/single-product-display";

import Slider, { Settings, CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const WeekProducts = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,

    nextArrow: <NextArrowComp />,
    prevArrow: <PrevArrowComp />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />

        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />

        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />

        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />
        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />
        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />
        <SingleProductDisplay
          description="Hello"
          final_price="$19.59"
          name="Ayurvedic Pain Relief Spray"
          price="$25.59"
          quantity="200"
        />
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
