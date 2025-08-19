import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import ISingleProduct from "@/types/products/single-product.interface";
import SingleProductDisplay from "@/components/common/complex/single-product-display";
import { useMemo } from "react";
import imgPlaceholderURL from "@/constants/imgPlaceholderURL";
import { isURL } from "validator";

export interface Top10SellersProps {
  products: ISingleProduct[];
}

const Top10Sellers = (props: Top10SellersProps) => {
  const t = useTranslations("HomePage.Top10Sellers");

  const firstProduct = props.products?.[0];

  const firstImage = useMemo(() => {
    const imgFullUrl = `https://${firstProduct.photo}`;
    if (!firstProduct.photo) {
      return imgPlaceholderURL({ text: "D" });
    }

    const isValidImg = isURL(imgFullUrl, {
      require_host: true,
      require_protocol: true,
    });

    if (!isValidImg) {
      return imgPlaceholderURL({ text: "D" });
    }

    return imgFullUrl;
  }, [firstProduct?.photo]);

  return (
    <div className="pb-10 xl:pb-40 w-full">
      <div className="w-full xl:px-20 flex flex-col items-start justify-start space-y-20">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h3 className="flex-[2] xl:flex-[4] text-xl xl:text-4xl font-bold">
            {t("title")}
          </h3>
          <Link
            href="/products"
            className="flex-1 font-bold text-xs text-center xl:text-lg text-white bg-[#023E8A] px-2 py-2 xl:px-5 xl:py-3 rounded-full"
          >
            {t("text")}
          </Link>
        </div>

        {/* Products Container */}
        <div className="w-full flex rtl:flex-row-reverse items-start justify-start xl:space-x-8">
          {/* Main Image */}
          <div className="hidden xl:block h-[50rem] flex-[2] border-2 border-gray-900 rounded-lg py-4 px-8">
            <div className="w-full h-full relative">
              <Link href={`/products/${firstProduct.id}`}>
                <Image
                  className="w-full h-full rounded-xl"
                  alt="Main Product"
                  src={firstImage || "/placeholder.png"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>

          {/* Components */}
          <div className="flex-[3] grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-16">
            {props.products?.slice(1, 6)?.map((prod) => {
              return <SingleProductDisplay smallImage key={uuid()} {...prod} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10Sellers;
