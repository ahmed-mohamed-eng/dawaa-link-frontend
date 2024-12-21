import React from "react";

const CountDownContainer = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="font-bold text-4xl text-black flex-1">
        Best Deals of the week!
      </h3>

      {/* Count Down */}
      <div className="w-full flex-1 flex items-center justify-start space-x-9">
        {/* Count Box */}
        <div className="w-24 h-24 bg-white font-black text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
          <span>25</span>
          <span className="font-thin text-sm">Days</span>
        </div>

        <span className="font-black text-6xl">:</span>

        {/* Count Box */}
        <div className="w-24 h-24 bg-white font-black text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
          <span>13</span>
          <span className="font-thin text-sm">Hours</span>
        </div>

        <span className="font-black text-6xl">:</span>

        {/* Count Box */}
        <div className="w-24 h-24 bg-white font-black text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
          <span>46</span>
          <span className="font-thin text-sm">Minutes</span>
        </div>

        <span className="font-black text-6xl">:</span>

        {/* Count Box */}
        <div className="w-24 h-24 bg-white font-black text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
          <span>59</span>
          <span className="font-thin text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownContainer;
