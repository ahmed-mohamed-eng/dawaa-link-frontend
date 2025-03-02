import React from "react";

import InformationHeader from "./InformationHeader";

import InformationContent from "./InformationContent";

const InformationComponent = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <InformationHeader />
      <InformationContent />
    </div>
  );
};

export default InformationComponent;
