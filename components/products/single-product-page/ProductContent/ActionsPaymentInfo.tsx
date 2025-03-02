import Image from "next/image";

const ActionsPaymentInfo = () => {
  return (
    <div className="mt-4 w-full flex flex-col items-start justify-start space-y-7">
      <span className="font-bold text-lg">Guaranteed Safe Checkout</span>

      <div className="w-full flex items-center justify-start space-x-6">
        <Image alt="Clock" src="/icons/clock.svg" width={20} height={20} />
        <span className="font-bold">
          Orders ship within 5 to 10 Business Days
        </span>
      </div>

      <div className="w-full flex items-center justify-start space-x-6">
        <Image
          alt="Fast Truck"
          src="/icons/fast-truck.png"
          width={20}
          height={20}
        />
        <span className="font-bold">
          Hoorey! This item ships free to the US
        </span>
      </div>
    </div>
  );
};

export default ActionsPaymentInfo;
