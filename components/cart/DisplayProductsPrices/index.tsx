import EmptyCart from "./EmptyCart";
import ProductsList from "./ProductsList";
import DisplayPricesSummary from "./DisplayPricesSummary";

import CartProductData from "@/types/cart/CartProductData.type";

export interface DisplayProductsPricesProps {
  products?: CartProductData[];
}

const DisplayProductsPrices = (props: DisplayProductsPricesProps) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {!props.products?.length ? (
        <EmptyCart />
      ) : (
        <>
          <ProductsList products={props.products} />
          <DisplayPricesSummary productList={props.products} />
        </>
      )}
    </div>
  );
};

export default DisplayProductsPrices;
