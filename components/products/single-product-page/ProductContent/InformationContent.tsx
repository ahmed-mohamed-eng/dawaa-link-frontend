import React from "react";

import DescriptionContent, {
  DescriptionContentProps,
} from "./DescriptionContent";

export interface InformationContentProps extends DescriptionContentProps {
  about?: string;
}

const InformationContent = (props: InformationContentProps) => {
  return (
    <div className="w-full py-4 xl:py-10">
      <DescriptionContent
        descriptionEn={props.descriptionEn}
        descriptionsAr={props.descriptionsAr}
      />
    </div>
  );
};

export default InformationContent;
