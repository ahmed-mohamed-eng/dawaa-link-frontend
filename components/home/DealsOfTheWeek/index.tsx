import React from "react";

import WeekProducts from "./WeekProducts";
import CountDownContainer from "./CountDownContainer";

import OfferedProduct from "@/types/products/OfferedProduct";

export interface DealsOfTheWeekProps {
  offeredProducts?: OfferedProduct[];
}

const DealsOfTheWeek = (props: DealsOfTheWeekProps) => {
  return (
    <div className="pb-10 xl:pb-40 w-full">
      <div className="w-full flex flex-col items-center justify-start space-y-10   xl:space-y-20 bg-[#84D8F0] p-6 xl:px-14 xl:py-28 rounded-xl">
        <CountDownContainer endDate={props?.offeredProducts?.[0]?.to} />
        <WeekProducts productsIds={props.offeredProducts?.map(p => p.product.id) || []} />
      </div>
    </div>
  );
};

export default DealsOfTheWeek;
