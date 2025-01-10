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
    <div className="pb-10 xl:pb-40 xl:px-10 w-full grid grid-cols-4 gap-x-8">
      {/* Filters */}
      <div className="hidden col-span-1 xl:flex flex-col space-y-14">
        <CategoryListCheck />
        <PriceRange />
        <Brands />
        <Ratings />
        <AdvertiseImage />
      </div>

      {/* Products */}
      <div className="w-full h-full col-span-4 xl:col-span-3 flex flex-col items-center justify-start space-y-6 xl:space-y-12">
        <DisplayOptions />
        <ProductsGroups />
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsResults;
