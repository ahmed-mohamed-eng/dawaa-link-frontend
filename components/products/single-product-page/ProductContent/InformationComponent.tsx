"use client";

import React, { useState } from "react";

import InformationHeader, { TabName } from "./InformationHeader";

import InformationContent from "./InformationContent";

const InformationComponent = () => {
  const [tabName, setTabName] = useState<TabName>("description");

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <InformationHeader onChange={setTabName} />
      <InformationContent tabName={tabName} />
    </div>
  );
};

export default InformationComponent;
