import React from "react";
import Image from "next/image";

import BuyButton from "./BuyButton";
import AddToCartBtn from "./AddToCartBtn";
import ShareOptions from "./ShareOptions";
import ProductQuantity from "./ProductQuantity";
import AddToWishListBtn from "./AddToWishListBtn";
import ActionsPaymentInfo from "./ActionsPaymentInfo";
import InformationComponent from "./InformationComponent";

const ProductContentDisplay = () => {
  return (
    <div className="w-full border-b border-black pb-10 lg:pb-20 flex flex-col items-start justify-start space-y-10 lg:space-y-20">
      {/* Display */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-start space-y-10 lg:space-y-0 lg:space-x-20">
        {/* Display Grid */}
        <div className="lg:flex-[6] w-full flex flex-col lg:flex-row items-start justify-start space-y-6 lg:space-y-0 lg:space-x-5">
          {/* Main Image */}
          <div className="relative w-full lg:flex-[4] h-80 lg:h-[40rem]">
            <Image alt="Main Image" src="/placeholder-2.png" fill />
          </div>

          {/* Side Images */}
          <div className="w-full lg:h-[40rem] flex-1 flex flex-row lg:flex-col items-start justify-between">
            <div className="relative w-20 lg:w-36 h-20 lg:h-36 cursor-pointer">
              <Image alt="Side Image" src="/placeholder-2.png" fill />
            </div>

            <div className="relative w-20 lg:w-36 h-20 lg:h-36 cursor-pointer">
              <Image alt="Side Image" src="/placeholder-2.png" fill />
            </div>

            <div className="relative w-20 lg:w-36 h-20 lg:h-36 cursor-pointer">
              <Image alt="Side Image" src="/placeholder-2.png" fill />
            </div>

            <div className="relative w-20 lg:w-36 h-20 lg:h-36 cursor-pointer">
              <Image alt="Side Image" src="/placeholder-2.png" fill />
            </div>
          </div>
        </div>

        {/* Info Name */}
        <div className="flex-[4] w-full flex flex-col items-start justify-start">
          {/* Name and Description */}
          <div className="w-full flex flex-col items-start justify-start space-y-7 border-b border-black pb-5">
            {/* Title */}
            <div className="w-full flex flex-col items-start justify-start space-y-1.5">
              <span className="text-[#00A6FB] font-bold">457 In Stock</span>
              <h1 className="capitalize text-black font-bold text-4xl">
                medical thermometer
              </h1>
            </div>

            {/* Prices Info */}
            <div className="w-full flex flex-col items-start justify-start space-y-1.5">
              <p className="text-black font-bold text-lg">
                <span>$127.00</span>
                <span className="text-white font-normal text-sm px-3 py-1 rounded-full bg-[#D70007] ms-4">
                  -16%
                </span>
              </p>

              <div className="flex items-center justify-start space-x-3">
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
              </div>
            </div>

            {/* Description */}
            <p className="w-full font-medium">
              Nulla ut mollis urna, nec interdum ligula. Suspendisse nisi ex,
              euismod ac purus eu, efficitur dignissim ligula. Duis porttitor
              ullamcorper maximus. Nulla facilisi. In hac habitasse platea
              dictumst.
            </p>
          </div>

          {/* Actions Section */}
          <div className="mt-14 w-full flex flex-col items-start justify-start space-y-7 border-b border-black pb-5">
            {/* Buy and Cart */}
            <div className="w-full lg:w-4/5 grid grid-cols-4 gap-4">
              <ProductQuantity />
              <AddToCartBtn />
              <BuyButton />
            </div>

            <AddToWishListBtn />
            <ShareOptions />
          </div>

          <ActionsPaymentInfo />
        </div>
      </div>

      {/* Information */}
      <InformationComponent />
    </div>
  );
};

export default ProductContentDisplay;
