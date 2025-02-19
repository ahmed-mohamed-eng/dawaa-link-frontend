"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import ToBuyProduct from "./ToBuyProduct";
import ISingleProduct from "@/types/products/single-product.interface";

type Product = {
  id: number;
  amount: number;
};

export interface ProductsListProps {
  onUpdateProductList: (productList: Product[]) => void;
  products?: ISingleProduct[];
}

const ProductsList = (props: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const onUpdateProductList = (amount: number, id?: number) => {
    if (!id) {
      return;
    }

    const prevProduct = products.find((product) => product.id === id);

    if (prevProduct?.amount === amount && prevProduct.id === id) {
      return;
    }

    const updatedProducts = Array.from(products);

    updatedProducts.push({ id, amount });

    props.onUpdateProductList(updatedProducts);
    setProducts(updatedProducts);
  };

  const prevProducts =
    (props.products?.filter(
      (v) => typeof v.id !== "undefined"
    ) as ISingleProduct[]) || [];

  return (
    <div className="w-full col-span-4 flex flex-col items-start justify-start space-y-4">
      {prevProducts.map((prod) => {
        return (
          <ToBuyProduct
            key={uuid()}
            amount={10}
            onAmountChange={onUpdateProductList}
            product={prod}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
