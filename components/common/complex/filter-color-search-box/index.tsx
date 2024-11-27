import React from "react";

import FilterColorSelectBox from "../../simple/filter-color-select-box";

export interface FilterSearchBoxProps {
  name: string;
}

const FilterColorSearchBox = (props: FilterSearchBoxProps) => {
  return (
    <div className="flex flex-col space-y-8 pb-6 border-b border-black w-80">
      <div className="flex items-center justify-between space-x-20">
        <p className="text-[#003F62] font-semibold">{props.name}</p>

        <button className="text-[#595959] font-medium text-sm">Reset</button>
      </div>

      <FilterColorSelectBox
        colors={[
          { name: "Orange", value: "#EDA415" },
          { name: "Red", value: "#E42424" },
          { name: "Blue Petroleum", value: "#1B5A7D" },
          { name: "Gray", value: "#ACACAC" },
          { name: "Green Petroleum", value: "#1D5F23" },
          { name: "Blue", value: "#2E56A3" },
          { name: "Purple", value: "#8131A7" },
          { name: "Red Petroleum", value: "#BC2944" },
          { name: "Olive", value: "#9BC14C" },
        ]}
      />
    </div>
  );
};

export default FilterColorSearchBox;
