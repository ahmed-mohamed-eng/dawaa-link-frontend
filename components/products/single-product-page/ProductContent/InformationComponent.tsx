import React from "react";

import InformationHeader from "./InformationHeader";

import InformationContent, {
  InformationContentProps,
} from "./InformationContent";

export interface InformationComponentProps extends InformationContentProps {
  info?: string;
}

const InformationComponent = (props: InformationComponentProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <InformationHeader />
      <InformationContent
        descriptionEn={props.descriptionEn}
        descriptionsAr={props.descriptionsAr}
      />
    </div>
  );
};

export default InformationComponent;
