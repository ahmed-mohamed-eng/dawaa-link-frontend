import { FaAngleDown } from "react-icons/fa";

const DisplayResult = () => {
  return (
    <div className="flex items-center justify-start space-x-7 ps-8 py-5 flex-1">
      <div className="flex items-center justify-end space-x-2 flex-1">
        <button className="font-bold text-xs lg:text-base text-[#103178]">
          Show Result 12
        </button>
        <FaAngleDown fill="#103178" stroke="#103178" />
      </div>
    </div>
  );
};

export default DisplayResult;
