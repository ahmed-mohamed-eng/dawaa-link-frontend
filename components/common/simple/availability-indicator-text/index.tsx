import React from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  itemCount: number;
}

const AvailabilityIndicatorText = (props: Props) => {
  if (props.itemCount < 0) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <span>Availability: </span>
      {props.itemCount > 0 ? (
        <span className="font-bold text-green-600 flex items-center space-x-1 text-sm">
          <FaCheck fontSize={13} className="fill-green-600" />
          <span>In Stock</span>
        </span>
      ) : null}

      {props.itemCount === 0 ? (
        <span className="font-bold text-red-600 flex items-center space-x-1 text-sm">
          <span>Out of Stock</span>
        </span>
      ) : null}
    </div>
  );
};

export default AvailabilityIndicatorText;
