"use client";

import React, { useState } from "react";

const Brands = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        Brands
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-center justify-start space-y-8 px-6">
        <SinglePicks name="Medtronic" />
        <SinglePicks name="GE HealthCare" />
        <SinglePicks name="Stryker" />
        <SinglePicks name="JNJ logo" />
        <SinglePicks name="Baxter" />
        <SinglePicks name="Cardinal Health" />
        <SinglePicks name="Becton Dickinson" />
        <SinglePicks name="CMR Surgical" />
      </div>
    </div>
  );
};

export default Brands;

export interface SinglePicksProps {
  name: string;
}

function SinglePicks(props: SinglePicksProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-bold text-[#023E8A] text-lg">{props.name}</p>
      <button
        data-selected={selected || undefined}
        className="w-5 h-5 rounded bg-[#D9D9D9] data-[selected]:bg-[#023E8A] text-white font-bold text-xl flex items-center justify-center"
        onClick={() => setSelected(!selected)}
      >
        {selected ? <p className="w-1 h-1 rounded-full bg-white" /> : null}
      </button>
    </div>
  );
}
