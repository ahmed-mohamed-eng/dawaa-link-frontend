import Image from "next/image";

const ActionsPaymentInfo = () => {
  return (
    <div className="mt-4 w-full flex flex-col items-start justify-start space-y-7">
      <span className="font-bold text-lg">Guaranteed Safe Checkout</span>

      <div className="w-full flex items-center justify-start space-x-3">
        <div className="px-3 py-2 rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            alt="Payoneer"
            src="/icons/payments/payoneer.svg"
            width={50}
            height={30}
          />
        </div>

        <div className="px-3 py-2 rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            alt="Visa"
            src="/icons/payments/visa.svg"
            width={50}
            height={30}
          />
        </div>

        <div className="px-3 py-2 rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            alt="Skrill"
            src="/icons/payments/skrill.svg"
            width={50}
            height={30}
          />
        </div>

        <div className="px-3 py-2.5 rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            alt="Amazon Pay"
            src="/icons/payments/amazon-pay.svg"
            width={50}
            height={50}
          />
        </div>

        <div className="px-3 py-2 rounded-md bg-[#F5F5F5] flex items-center justify-center">
          <Image
            alt="Google Pay"
            src="/icons/payments/google-pay.svg"
            width={50}
            height={30}
          />
        </div>
      </div>

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
