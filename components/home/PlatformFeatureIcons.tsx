import Image from "next/image";

const PlatformFeatureIcons = () => {
  return (
    <div className="pb-40 w-full">
      <div className="w-full flex items-center justify-center divide-x-2 divide-black">
        {/* Feature */}
        <div className="pr-10 flex items-center justify-start space-x-5">
          <Image
            alt="Feature"
            src="/icons/present.svg"
            width={60}
            height={60}
          />

          <div className="flex flex-col items-start justify-start space-y-1">
            <span className="text-lg font-bold">Reward Program</span>
            <span className="text-sm">Morbi tristique felis.</span>
          </div>
        </div>

        {/* Feature */}
        <div className="px-10 flex items-center justify-start space-x-5">
          <Image
            alt="Feature"
            src="/icons/discount.svg"
            width={70}
            height={65}
          />

          <div className="flex flex-col items-start justify-start space-y-1">
            <span className="text-lg font-bold">Special Discounts</span>
            <span className="text-sm">Morbi tristique felis.</span>
          </div>
        </div>

        {/* Feature */}
        <div className="px-10 flex items-center justify-start space-x-5">
          <Image
            alt="Feature"
            src="/icons/delivery.svg"
            width={110}
            height={52}
          />

          <div className="flex flex-col items-start justify-start space-y-1">
            <span className="text-lg font-bold">Reward Program</span>
            <span className="text-sm">Morbi tristique felis.</span>
          </div>
        </div>

        {/* Feature */}
        <div className="pl-10 flex items-center justify-start space-x-5">
          <Image alt="Feature" src="/icons/offer.svg" width={62} height={65} />

          <div className="flex flex-col items-start justify-start space-y-1">
            <span className="text-lg font-bold">Great Prices</span>
            <span className="text-sm">Morbi tristique felis.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatureIcons;
