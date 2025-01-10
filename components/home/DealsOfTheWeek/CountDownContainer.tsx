import React from "react";

const CountDownContainer = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between space-y-6 xl:space-y-0">
      <h3 className="font-bold text-4xl text-black flex-1">
        Best Deals of the week!
      </h3>

      {/* Count Down */}
      <div className="w-full flex-1 flex items-center justify-start space-x-2 xl:space-x-9">
        <CountBoxItem name="Days" num={25} />

        <span className="font-black text-3xl xl:text-6xl">:</span>

        <CountBoxItem name="Hours" num={13} />

        <span className="font-black text-3xl xl:text-6xl">:</span>

        <CountBoxItem name="Minutes" num={11} />

        <span className="font-black text-3xl xl:text-6xl">:</span>

        <CountBoxItem name="Seconds" num={59} />
      </div>
    </div>
  );
};

export default CountDownContainer;

function CountBoxItem({ num, name }: { num: number; name: string }) {
  return (
    <div className="w-16 xl:w-24 h-16 xl:h-24 bg-white font-black xl:text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
      <span>{num}</span>
      <span className="font-thin text-xs xl:text-sm">{name}</span>
    </div>
  );
}
