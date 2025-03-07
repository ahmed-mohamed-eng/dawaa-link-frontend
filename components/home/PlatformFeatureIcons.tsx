import Image from "next/image";
import { useTranslations } from "next-intl";

const PlatformFeatureIcons = () => {
  const t = useTranslations("HomePage.PlatformFeatureIcons");

  return (
    <div className="pb-10 xl:pb-40 w-full">
      <div className="w-full grid grid-cols-2 gap-4 xl:flex xl:rtl:flex-row-reverse xl:items-center xl:justify-center xl:divide-x-2 xl:divide-black">
        <FeatureItem
          name={t("rewardProgram.title")}
          iconURI="/icons/present.svg"
          brief={t("rewardProgram.description")}
        />

        <FeatureItem
          name={t("specialDiscounts.title")}
          iconURI="/icons/discount.svg"
          brief={t("specialDiscounts.description")}
        />

        <FeatureItem
          name={t("greatPrices.title")}
          iconURI="/icons/delivery.svg"
          brief={t("greatPrices.description")}
        />

        <FeatureItem
          name={t("fastDelivery.title")}
          iconURI="/icons/offer.svg"
          brief={t("fastDelivery.description")}
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
    <div className="xl:px-10 flex rtl:flex-row-reverse items-center justify-start space-x-3 xl:space-x-5">
      <Image
        alt="Feature"
        className="hidden xl:block"
        src={props.iconURI}
        width={60}
        height={60}
      />

      <Image
        alt="Feature"
        className="block xl:hidden"
        src={props.iconURI}
        width={30}
        height={30}
      />

      <div className="flex flex-col items-start justify-start space-y-1">
        <span className="text-sm xl:text-lg font-bold">{props.name}</span>
        <span className="text-xs xl:text-sm">{props.brief}</span>
      </div>
    </div>
  );
}
