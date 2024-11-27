import React from "react";
import { v4 as uuid } from "uuid";

import FilterSelectBox, {
  FilterSelectBoxProps,
} from "../../simple/filter-select-box";

export interface FilterSearchBoxProps {
  name: string;
  filterOptions: FilterSelectBoxProps[];
}

const FilterSearchBox = (props: FilterSearchBoxProps) => {
  return (
    <div className="flex flex-col space-y-8 pb-6 border-b border-black w-80">
      <div className="flex items-center justify-between space-x-20">
        <p className="text-[#003F62] font-semibold">{props.name}</p>

        <button className="text-[#595959] font-medium text-sm">Reset</button>
      </div>

      <div className="flex flex-col space-y-4">
        {props.filterOptions.map((fo) => {
          return <FilterSelectBox key={uuid()} {...fo} />;
        })}
      </div>
    </div>
  );
};

export default FilterSearchBox;
