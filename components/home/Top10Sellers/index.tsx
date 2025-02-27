import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Link } from "@/i18n/routing";

import ISingleProduct from "@/types/products/single-product.interface";
import SingleProductDisplay from "@/components/common/complex/single-product-display";

export interface Top10SellersProps {
  products: ISingleProduct[];
}

const Top10Sellers = (props: Top10SellersProps) => {
  return (
    <div className="pb-10 xl:pb-40 w-full">
      <div className="w-full xl:px-20 flex flex-col items-start justify-start space-y-20">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h3 className="flex-[2] xl:flex-[4] text-xl xl:text-4xl font-bold">
            Top 10 Best Seller Products
          </h3>
          <Link
            href="/products"
            className="flex-1 font-bold text-xs xl:text-lg text-white bg-[#023E8A] px-2 py-2 xl:px-5 xl:py-3 rounded-full"
          >
            View All Products
          </Link>
        </div>

        {/* Products Container */}
        <div className="w-full flex items-start justify-start xl:space-x-8">
          {/* Main Image */}

          <div className="hidden xl:block relative h-[50rem] flex-[2]">
            <Image
              className="w-full h-full rounded-xl"
              alt="Main Product"
              src="/placeholder.png"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Components */}
          <div className="flex-[3] grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-16">
            {props.products?.slice(0, 5)?.map((prod) => {
              return <SingleProductDisplay smallImage key={uuid()} {...prod} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10Sellers;
