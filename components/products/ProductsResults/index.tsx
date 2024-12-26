import Brands from "./Brands";
import Ratings from "./Ratings";
import PriceRange from "./PriceRange";
import AdvertiseImage from "./AdvertiseImage";
import CategoryListCheck from "./CategoryListCheck";

const ProductsResults = () => {
  return (
    <div className="pb-40 px-10 w-full grid grid-cols-4">
      {/* Filters */}
      <div className="col-span-1 flex flex-col space-y-14">
        <CategoryListCheck />
        <PriceRange />
        <Brands />
        <Ratings />
        <AdvertiseImage />
      </div>

      {/* Products */}
      <div className="col-span-3"></div>
    </div>
  );
};

export default ProductsResults;
