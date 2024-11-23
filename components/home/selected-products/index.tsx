import Image from "next/image";

import NavCircles from "@/components/common/nav-circles";
import RatingComp from "@/components/common/rating-comp";

const SelectedProducts = () => {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 py-16 px-6">
      {/* Main */}
      <div className="border-2 border-slate-200 rounded-lg px-16 py-12 col-span-2 row-span-2 flex flex-col space-y-4">
        {/* Product */}
        <div className="flex items-center space-x-8">
          {/* Image */}
          <div className="w-56 h-56 relative">
            <Image
              alt="Product Image"
              src="/product.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-8">
            {/* Main Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-primary text-lg">JBL bar 2.1 deep bass</h3>
              <p>$11,70</p>
              <RatingComp count={20} value={3.2} />
            </div>
          </div>
        </div>

        <NavCircles pageCount={3} />
      </div>

      {/* Side a */}
      <div className="border-2 border-slate-200 rounded-lg px-6 py-4"></div>
      {/* Side b */}
      <div className="border-2 border-slate-200 rounded-lg px-6 py-4"></div>
    </div>
  );
};

export default SelectedProducts;
