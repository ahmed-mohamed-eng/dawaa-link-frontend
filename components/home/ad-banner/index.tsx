import React from "react";
import Image from "next/image";

const AdBanner = () => {
  return (
    <div className="flex flex-col py-16 px-6 items-end h-[30rem] relative">
      <div className="w-full h-full relative">
        <Image
          className="w-full h-full rounded-2xl -z-40"
          alt="bg"
          src="/bg.jpeg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 absolute h-full right-32 top-0">
        <p className="px-6 py-2 rounded-3xl bg-secondary text-white font-semibold">
          New laptop
        </p>
        <div className="w-full flex flex-col space-y-4">
          <p className="font-bold text-[#2E8FC5] text-5xl">
            Sale up to 50% off
          </p>
          <p className="text-white w-full text-center">12 inch hd display</p>
        </div>
        <p className="px-6 py-2 rounded-3xl bg-secondary text-white font-semibold">
          Shop Now
        </p>
      </div>
    </div>
  );
};

export default AdBanner;
