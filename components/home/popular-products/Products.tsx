import { v4 as uuid } from "uuid";

import ISingleProduct from "@/types/products/single-product.interface";
import SingleProductDisplay from "@/components/common/complex/single-product-display";

export interface ProductsProps {
  products: ISingleProduct[];
}

export default function Products(props: ProductsProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {/* Products List */}
      {props.products.map((product) => {
        return (
          <SingleProductDisplay
            key={uuid()}
            {...product}
            name={product.name}
            price={product.price}
            rating={product.rating}
            url={product.url}
          />
        );
      })}
    </div>
  );
}
