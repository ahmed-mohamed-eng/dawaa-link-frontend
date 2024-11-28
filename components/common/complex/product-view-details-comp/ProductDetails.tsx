import React from "react";
import Image from "next/image";

import TitleText from "../../simple/title-text";
import PriceText from "../../simple/price-text";
import RatingComp from "../../simple/rating-comp";
import ColorSelectComp from "../../simple/color-select-comp";
import AvailabilityIndicatorText from "../../simple/availability-indicator-text";
import SizeSelectRadio from "../../simple/size-select-radio";
import SelectQuantity from "../../simple/select-quantity";
import ActionButton from "../../simple/action-button";

const ProductDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-4 divide-y">
      <div className="flex flex-col space-y-6 py-4">
        <TitleText sizes="2xl" text="Play Game" />
        <PriceText sizes="sm" currency="$" value={1170} />
        <RatingComp count={30} value={2.3} />
        <AvailabilityIndicatorText itemCount={10} />
      </div>

      <div className="flex flex-col space-y-12 py-4">
        {/* Color Picker */}
        <div className="flex items-center space-x-2">
          <span>Color: </span>
          <div className="flex items-center space-x-2">
            <ColorSelectComp value="#D0EC48" />
            <ColorSelectComp value="#565656" />
          </div>
        </div>

        {/* Size Picker */}
        <div className="flex items-center space-x-2">
          <span>Size: </span>
          <div className="flex items-center space-x-2">
            <SizeSelectRadio value="30" name="30" />
            <SizeSelectRadio value="56" name="56" />
            <SizeSelectRadio value="42" name="42" />
            <SizeSelectRadio value="48" name="48" />
          </div>
        </div>

        {/* Quantity Picker */}
        <div className="flex items-center space-x-2">
          <span>Quantity: </span>
          <div className="flex items-center space-x-2">
            <SelectQuantity value={1} />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <ActionButton size="sm" value="Add to cart" variant="take-action" />
          <ActionButton size="sm" value="Buy it now" variant="take-action" />

          <button className="w-12 h-12 flex items-center justify-center bg-[#EEEEEE] rounded-full">
            <Image alt="Add to Fav" src="/heart.svg" width={20} height={20}/>
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-6 py-4">
        <div className="flex items-center space-x-2">
          <span>Sku: </span>
          <span>01133-9-9</span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Category: </span>
          <span>01133-9-9</span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Category: </span>
          <span>01133-9-9</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
