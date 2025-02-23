"use client";

import React from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Link } from "@/i18n/routing";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import ISingleProduct from "@/types/products/single-product.interface";

import Slider, { Settings, CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgPlaceholderURL from "@/constants/imgPlaceholderURL";

type Props = {
  categoryUrl: string;
  categoryName: string;
  products: ISingleProduct[];
};

const CategoryCarousel = (props: Props) => {
  const settings: Settings = {
    appendDots: (dot) => {
      return (
        <button className="w-24 h-24 rounded-full border p-2 bg-secondary">
          {dot}
        </button>
      );
    },

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full flex items-center justify-between">
        <Link
          href={`/categories/${props.categoryUrl}`}
          className="text-primary font-medium"
        >
          View All
        </Link>

        <p className="text-primary font-semibold text-xl">
          {props.categoryName}
        </p>
      </div>

      <div className="w-full flex items-center justify-center slider-container h-96">
        <Slider {...settings} className="w-[90%] h-full">
          {props.products?.map((v) => {
            return (
              <div key={uuid()} className="space-y-4 p-4 relative">
                <div className="w-full flex items-center justify-center p-4 relative">
                  <div className="w-28 h-28 relative">
                    <Image
                      alt={v.name}
                      src={v.photo || imgPlaceholderURL()}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <Link
                  href={`/products/${v.id}`}
                  className="w-full text-center font-semibold text-primary inline-block"
                >
                  {v.name}
                </Link>

                {/* <p className="mx-auto w-20 line-clamp-2 overflow-hidden text-ellipsis text-center">
                  {v.description}
                </p> */}

                <div className="space-y-1 flex flex-col items-center justify-center">
                  <p className="font-bold text-lg text-center">
                    {v.final_price}
                  </p>

                  {v.discount ? (
                    <p className="text-xs font-medium">
                      <span className="line-through">{v.price}</span>{" "}
                      <span className="no-underline">{v.discount} off</span>
                    </p>
                  ) : null}
                </div>

                <div className="w-full flex items-center justify-center space-x-6">
                  <button className="border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white text-sm">
                    Buy Now
                  </button>

                  <button className="border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

function CustomPrevArrow(props: CustomArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className="w-12 h-24 rounded-lg absolute top-1/2 -left-14 -translate-y-1/2 font-bold flex items-center justify-center"
      title="Previous Button"
    >
      <AiOutlineArrowLeft className="fill-primary text-primary" fontSize={25} />
    </button>
  );
}

function CustomNextArrow(props: CustomArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className="w-12 h-24 rounded-lg absolute top-1/2 -right-14 -translate-y-1/2 font-bold flex items-center justify-center"
      title="Previous Button"
    >
      <AiOutlineArrowRight
        className="fill-primary text-primary font-bold"
        fontSize={25}
      />
    </button>
  );
}

export default CategoryCarousel;
