import React from "react";

const ShareOptions = () => {
  return (
    <div className="w-full flex items-center justify-start space-x-10 font-bold text-black text-lg">
      <span>Share</span>

      <div className="flex items-center justify-start divide-x divide-black">
        <button className="pr-3">FB</button>
        <button className="px-3">YU</button>
        <button className="px-3">TW</button>
        <button className="pl-3">IN</button>
      </div>
    </div>
  );
};

export default ShareOptions;
