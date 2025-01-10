import React from "react";

const EmergencyBanner = () => {
  return (
    <div className="pb-10 xl:pb-20 w-full">
      <div className="p-6 xl:p-0 w-full h-96 flex flex-col items-center justify-center space-y-8 xl:space-y-14 font-bold text-3xl xl:text-5xl text-white bg-[#403D39] rounded-2xl">
        <div className="w-full space-y-4">
          <h3 className="text-center">Do You nee energency Medicine ?</h3>
          <h3 className="text-center">Contact Us @ 258 256 2584</h3>
        </div>

        <div className="w-full flex items-center justify-center space-x-8 text-lg">
          <button className="text-sm xl:text-base px-4 xl:px-8 py-2 rounded-full text-white bg-[#00A6FB]">
            Contact Now
          </button>

          <button className="text-sm xl:text-base px-4 xl:px-8 py-2 rounded-full text-white bg-[#00A6FB]">
            Online Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
