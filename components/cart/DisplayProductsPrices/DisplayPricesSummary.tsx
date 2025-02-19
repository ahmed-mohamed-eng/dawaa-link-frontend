import React from "react";

export interface DisplayPricesSummaryProps {
  productList?: { amount: number; id: number }[];
}

const DisplayPricesSummary = (props: DisplayPricesSummaryProps) => {
  const subTotalPrice = props.productList?.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  return (
    <div className="w-full col-span-2 flex flex-col items-start justify-start space-y-4">
      {/* Price Summary */}
      <div className="flex flex-col items-start justify-start space-y-4">
        <h1 className="text-2xl font-semibold">Price Summary</h1>

        {/* Subtotal */}
        <div className="flex items-center justify-between w-full">
          <p>Subtotal</p>
          <p>EGP{subTotalPrice || 0}</p>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between w-full">
          <p>Shipping</p>
          <p>EGP10</p>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between w-full">
          <p>Total</p>
          <p>EGP{subTotalPrice ? subTotalPrice + 10 : 0}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-primary text-white rounded-lg py-2">
        Checkout
      </button>
    </div>
  );
};

export default DisplayPricesSummary;
