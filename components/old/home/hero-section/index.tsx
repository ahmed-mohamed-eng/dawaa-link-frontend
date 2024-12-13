"use client";

import Image from "next/image";

import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full px-16 py-6 grid grid-cols-2">
      {/* Product Info */}
      <div className="flex flex-col space-y-8 justify-center">
        {/* Product Name */}
        <div className="text-5xl font-bold text-primary w-fit">
          <p>Canon</p>
          <p className="mt-3">Camera</p>
        </div>

        {/* Hero Action */}
        <div className="flex items-center space-x-6 w-fit">
          <button className="bg-secondary px-8 py-4 rounded-2xl text-white font-bold">
            Shop now
          </button>
          <button className="bg-white border border-primary px-8 py-4 rounded-2xl text-primary font-bold">
            Shop now
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-6">
          <div className="w-4 h-4 bg-secondary rounded-full cursor-pointer" />
          <div className="w-4 h-4 bg-white border border-secondary rounded-full cursor-pointer" />
          <div className="w-4 h-4 bg-white border border-secondary rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Product Image */}
      <div className="min-h-96 flex items-center justify-center py-20">
        <div className="w-full h-96 relative">
          <Image
            alt="Featured Product"
            src="/product.png"
            fill
            style={{ objectFit: "contain" }}
          />

          <div className="absolute bottom-12 right-24 w-32 h-32 bg-secondary text-white font-bold text-2xl rounded-full flex flex-col items-center justify-center">
            <p>Only</p>
            <p>$89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
