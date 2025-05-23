import Image from "next/image";
import { useTranslations } from "next-intl";

const ActionsPaymentInfo = () => {
  const t = useTranslations("ProductContent");

  return (
    <div className="mt-4 w-full flex flex-col items-start justify-start space-y-7">
      <span className="font-bold text-lg">{t("guaranteed_safe_checkout")}</span>

      <div className="w-full flex items-center justify-start gap-3">
        <Image alt="Clock" src="/icons/clock.svg" width={20} height={20} />
        <span className="font-bold">
          {t("orders_ship_time")}
        </span>
      </div>

      <div className="w-full flex items-center justify-start gap-3">
        <Image
          alt="Fast Truck"
          src="/icons/fast-truck.png"
          width={20}
          height={20}
        />
        <span className="font-bold">
          {t("orders_ship_free")}
        </span>
      </div>
    </div>
  );
};

export default ActionsPaymentInfo;
