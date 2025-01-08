import React from "react";

import WeekProducts from "./WeekProducts";
import CountDownContainer from "./CountDownContainer";

const DealsOfTheWeek = () => {
  return (
    <div className="pb-10 lg:pb-40 w-full">
      <div className="w-full flex flex-col items-center justify-start space-y-10   lg:space-y-20 bg-[#84D8F0] p-6 lg:px-14 lg:py-28 rounded-xl">
        <CountDownContainer />
        <WeekProducts />
      </div>
    </div>
  );
};

export default DealsOfTheWeek;
