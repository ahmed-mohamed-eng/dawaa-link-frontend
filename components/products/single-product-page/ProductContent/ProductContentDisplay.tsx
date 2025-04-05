"use client";

import React, { useState } from "react";
import Image from "next/image";

import BuyButton from "./BuyButton";
import AddToCartBtn from "./AddToCartBtn";
import ShareOptions from "./ShareOptions";
import ProductQuantity from "./ProductQuantity";
import AddToWishListBtn from "./AddToWishListBtn";
import ActionsPaymentInfo from "./ActionsPaymentInfo";
// import InformationComponent from "./InformationComponent";
import ISingleProduct from "@/types/products/single-product.interface";

export interface ProductContentDisplayProps {
  product: ISingleProduct;
}

const ProductContentDisplay = ({ product }: ProductContentDisplayProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const productImage = () => {
    if (!product.photo) {
      return "/placeholder-2.png";
    }

    return `https://${product.photo}`;
  };

  return (
    <div className="w-full border-b border-black pb-10 xl:pb-20 flex flex-col items-start justify-start space-y-10 xl:space-y-20">
      {/* Display */}
      <div className="w-full flex flex-col xl:flex-row items-start justify-start space-y-10 xl:space-y-0 xl:space-x-20">
        {/* Display Grid */}
        <div className="xl:flex-[6] w-full flex flex-col xl:flex-row items-start justify-start space-y-6 xl:space-y-0 xl:space-x-5">
          {/* Main Image */}
          <div className="relative w-full xl:flex-[4] h-80 xl:h-[40rem]">
            <Image alt="Main Image" src={productImage()} fill />
          </div>
        </div>

        {/* Info Name */}
        <div className="flex-[4] w-full flex flex-col items-start justify-start">
          {/* Name and Description */}
          <div className="w-full flex flex-col items-start justify-start space-y-7 border-b border-black pb-5">
            {/* Title */}
            <div className="w-full flex flex-col items-start justify-start space-y-1.5">
              {product.quantity && (
                <span className="text-[#00A6FB] font-bold">
                  {product.quantity} In Stock
                </span>
              )}
              <h1 className="capitalize text-black font-bold text-4xl">
                {product.name}
              </h1>
            </div>

            {/* Prices Info */}
            <div className="w-full flex flex-col items-start justify-start space-y-1.5">
              <p className="text-black font-bold text-lg">
                <span>${product.price}</span>
                {product.discount && (
                  <span className="text-white font-normal text-sm px-3 py-1 rounded-full bg-[#D70007] ms-4">
                    {product.discount}
                  </span>
                )}
              </p>

              {/* <div className="flex items-center justify-start space-x-3">
                <div className="flex items-center justify-start space-x-1">
                  <Image alt="Star" src="/star.svg" width={15} height={15} />
                  <Image alt="Star" src="/star.svg" width={15} height={15} />
                  <Image alt="Star" src="/star.svg" width={15} height={15} />
                  <Image
                    alt="Star"
                    src="/star-empty.svg"
                    width={15}
                    height={15}
                  />
                  <Image
                    alt="Star"
                    src="/star-empty.svg"
                    width={15}
                    height={15}
                  />
                </div>

                <p className="font-bold text-black">
                  {"("}45 Reviews{")"}
                </p>
              </div> */}
            </div>

            {/* Description */}
            <p className="w-full font-medium">{product.description}</p>
          </div>

          {/* Actions Section */}
          <div className="mt-14 w-full flex flex-col items-start justify-start space-y-7 border-b border-black pb-5">
            {/* Buy and Cart */}
            <div className="w-full grid grid-cols-4 gap-4">
              <ProductQuantity
                maxQuantity={product.quantity}
                onChange={setProductQuantity}
              />
              {product.id && (
                <AddToCartBtn
                  toAddProduct={product}
                  quantity={productQuantity}
                />
              )}
              {product.id && <BuyButton productId={product.id} />}
            </div>

            {product.id && <AddToWishListBtn productId={product.id} />}
            {product.id && <ShareOptions productId={product.id} />}
          </div>

          <ActionsPaymentInfo />
        </div>
      </div>

      {/* Information */}
      {/* <InformationComponent descriptionEn={product.description} /> */}
    </div>
  );
};

export default ProductContentDisplay;
