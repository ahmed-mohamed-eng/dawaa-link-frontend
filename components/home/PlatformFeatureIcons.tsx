import Image from "next/image";

const PlatformFeatureIcons = () => {
  return (
    <div className="pb-10 lg:pb-40 w-full">
      <div className="w-full grid grid-cols-2 gap-4 lg:flex lg:items-center lg:justify-center lg:divide-x-2 lg:divide-black">
        <FeatureItem
          name="Reward Program"
          iconURI="/icons/present.svg"
          brief="Morbi tristique felis."
        />

        <FeatureItem
          name="Special Discounts"
          iconURI="/icons/discount.svg"
          brief="Morbi tristique felis."
        />

        <FeatureItem
          name="Reward Program"
          iconURI="/icons/delivery.svg"
          brief="Morbi tristique felis."
        />

        <FeatureItem
          name="Great Prices"
          iconURI="/icons/offer.svg"
          brief="Morbi tristique felis."
        />
      </div>
    </div>
  );
};

export default PlatformFeatureIcons;

type FeatureItemProps = {
  iconURI: string;
  name: string;
  brief: string;
};

function FeatureItem(props: FeatureItemProps) {
  return (
    <div className="lg:pr-10 flex items-center justify-start space-x-3 lg:space-x-5">
      <Image
        alt="Feature"
        className="hidden lg:block"
        src={props.iconURI}
        width={60}
        height={60}
      />

      <Image
        alt="Feature"
        className="block lg:hidden"
        src={props.iconURI}
        width={30}
        height={30}
      />

      <div className="flex flex-col items-start justify-start space-y-1">
        <span className="text-sm lg:text-lg font-bold">{props.name}</span>
        <span className="text-xs lg:text-sm">{props.brief}</span>
      </div>
    </div>
  );
}
