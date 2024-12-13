import RatingComp from "@/components/common/simple/rating-comp";

import BorderedBox from "@/components/common/simple/bordered-box";
import ImgDisplayComp from "@/components/common/simple/img-display-comp";
import TitleText from "@/components/common/simple/title-text";
import PriceText from "@/components/common/simple/price-text";
import ProductSizes from "@/components/common/simple/product-sizes";
import QuickCartBtn from "@/components/common/simple/quick-cart-btn";

const SelectedProducts = () => {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 py-16 px-6">
      {/* Main */}
      <BorderedBox className="px-16 py-12 col-span-2 row-span-2 flex flex-col space-y-4">
        {/* Product */}
        <div className="flex items-center justify-between space-x-12">
          {/* Image */}
          <ImgDisplayComp
            sizes="lg"
            alt="Product Image"
            srcURL="/product.png"
          />

          {/* Info */}
          <div className="flex flex-col space-y-8">
            {/* Main Info */}
            <div className="flex flex-col space-y-4">
              <TitleText sizes="2xl" text="JBL bar 2.1 deep bass" />
              <PriceText sizes="xl" currency="$" value={11.7} />
              <RatingComp count={20} value={3.2} />
            </div>

            {/* sizes */}
            <ProductSizes size="sm" values={[57, 11, 47, 59]} />

            <div className="flex items-center justify-start space-x-4">
              <QuickCartBtn size="lg" />
            </div>
          </div>
        </div>
      </BorderedBox>

      {/* Side a */}
      <BorderedBox className="px-6 py-4 flex items-center justify-between space-x-6">
        <ImgDisplayComp sizes="sm" alt="Product Image" srcURL="/product.png" />

        <div className="flex flex-col space-y-4">
          <TitleText sizes="lg" text="JBL bar 2.1 deep bass" />
          <PriceText sizes="lg" currency="$" value={11.7} />
          <RatingComp count={20} value={3.2} />
        </div>
      </BorderedBox>
      {/* Side b */}
      <BorderedBox className="px-6 py-4 flex items-center justify-between space-x-6">
        <ImgDisplayComp sizes="sm" alt="Product Image" srcURL="/product.png" />

        <div className="flex flex-col space-y-4">
          <TitleText sizes="lg" text="JBL bar 2.1 deep bass" />
          <PriceText sizes="lg" currency="$" value={11.7} />
          <RatingComp count={20} value={3.2} />
        </div>
      </BorderedBox>
    </div>
  );
};

export default SelectedProducts;
