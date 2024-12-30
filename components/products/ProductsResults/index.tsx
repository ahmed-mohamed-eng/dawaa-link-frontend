import Brands from "./Brands";
import Ratings from "./Ratings";
import PriceRange from "./PriceRange";
import Pagination from "./Pagination";
import AdvertiseImage from "./AdvertiseImage";
import DisplayOptions from "./DisplayOptions";
import ProductsGroups from "./ProductsGroups";
import CategoryListCheck from "./CategoryListCheck";

const ProductsResults = () => {
  return (
    <div className="pb-40 px-10 w-full grid grid-cols-4 gap-x-8">
      {/* Filters */}
      <div className="col-span-1 flex flex-col space-y-14">
        <CategoryListCheck />
        <PriceRange />
        <Brands />
        <Ratings />
        <AdvertiseImage />
      </div>

      {/* Products */}
      <div className="h-full col-span-3 flex flex-col items-center justify-start space-y-12">
        <DisplayOptions />
        <ProductsGroups />
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsResults;
