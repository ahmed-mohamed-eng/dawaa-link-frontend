import ISingleProduct from "@/types/products/single-product.interface";
import Image from "next/image";

export interface HeroContentProps {
  product: ISingleProduct;
}

const HeroContent = (props: HeroContentProps) => {
  return (
    <div className="w-full pb-10 xl:pb-40">
      <div className="w-full flex flex-col relative">
        {/* Info */}
        <div className="w-full h-80 relative">
          <Image
            alt="Hero"
            className="rounded-3xl -z-50"
            src="/hero-image.png"
            fill
            style={{ objectFit: "cover" }}
          />

          <div className="h-full w-full flex flex-col items-start justify-center xl:px-48 font-bold">
            <h1 className="w-full text-4xl text-center text-[#023E8A] capitalize">
              {props.product.name || "Shop Products"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
