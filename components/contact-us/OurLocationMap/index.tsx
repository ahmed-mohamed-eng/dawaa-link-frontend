"use client";

import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), {
  loading: () => <p>Fetching Map</p>,
  ssr: false,
});

const OurLocationMap = () => {
  return (
    <div className="relative w-full h-[40rem] flex items-start justify-start">
      <DynamicMap />
    </div>
  );
};

export default OurLocationMap;
