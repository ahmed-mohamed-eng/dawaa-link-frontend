import SortDisplay from "./SortDisplay";
import DisplayOrder from "./DisplayOrder";
import DisplayResult from "./DisplayResult";

const DisplayOptions = () => {
  return (
    <div className="w-full bg-[#F0F2F5] px-5 flex items-center divide-x-2 divide-[#D7D7D7]">
      <DisplayOrder />
      <SortDisplay />
      <DisplayResult />
    </div>
  );
};

export default DisplayOptions;
