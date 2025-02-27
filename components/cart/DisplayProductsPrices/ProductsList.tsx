"use client";

import { useMemo } from "react";
import { v4 as uuid } from "uuid";

import ToBuyProduct from "./ToBuyProduct";
import CartProductData, {
  CartInnerProduct,
} from "@/types/cart/CartProductData.type";

import lodash from "lodash";

export interface ProductsListProps {
  products?: CartProductData[];
}

const ProductsList = (props: ProductsListProps) => {
  const products = useMemo(() => {
    return props.products?.map((v) => v.product_carts).flat();
  }, [props.products]);

  const filteredProducts: CartInnerProduct[] = useMemo(() => {
    const prods: { [key: number]: number } = {};

    // Find total quantity
    for (const item of products || []) {
      const parsedValue = parseInt(item.quantity_product) || 0;

      const quantity = parsedValue + (prods[item.id] || 0);

      prods[item.id] = quantity;
    }

    // Remove duplicates.
    const filteredList = lodash.map(
      lodash.uniqBy(products, (p) => p.id),
      (p) => {
        if (typeof prods[p.id] !== "undefined") {
          const updatedProduct = Object.assign(p);
          updatedProduct.quantity_product = prods[p.id].toString();

          return updatedProduct;
        } else {
          return p;
        }
      }
    );

    return filteredList;
  }, [products]);

  return (
    <div className="w-full col-span-4 flex flex-col items-start justify-start space-y-4">
      {filteredProducts?.map((prod) => {
        return (
          <ToBuyProduct
            key={uuid()}
            amount={parseInt(prod.quantity_product)}
            productId={prod.id}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
