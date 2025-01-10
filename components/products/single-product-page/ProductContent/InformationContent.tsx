import React from "react";

import { TabName } from "./InformationHeader";

import DescriptionContent from "./DescriptionContent";

export interface InformationContentProps {
  tabName: TabName;
}

const InformationContent = (props: InformationContentProps) => {
  return (
    <div className="w-full py-4 xl:py-10">
      <DescriptionContent tabName={props.tabName} />
    </div>
  );
};

export default InformationContent;
