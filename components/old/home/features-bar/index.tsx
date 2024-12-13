import React from "react";

import TitleText from "@/components/common/simple/title-text";
import ImgDisplayComp from "@/components/common/simple/img-display-comp";

const FeaturesBar = () => {
  return (
    <div className="w-full bg-[#E2F4FF] rounded-xl px-4 py-6 flex items-center justify-evenly">
      <BarInfoComp
        srcURL="/box-tick.svg"
        title="Free delivery"
        phrase="on order above $50,00"
      />

      <BarInfoComp
        srcURL="/crown.svg"
        title="Best quality"
        phrase="best quality in low price"
      />

      <BarInfoComp
        srcURL="/warranty.svg"
        title="1 year warranty"
        phrase="available warranty"
      />
    </div>
  );
};

type BarInfoCompProps = {
  srcURL: string;
  title: string;
  phrase: string;
};

function BarInfoComp(props: BarInfoCompProps) {
  return (
    <div className="flex items-center justify-start space-x-6">
      <ImgDisplayComp sizes="2xs" srcURL={props.srcURL} />

      <div className="flex flex-col justify-start items-start space-y-1">
        <TitleText sizes="sm" text={props.title} />
        <TitleText sizes="xxs" text={props.phrase} />
      </div>
    </div>
  );
}

export default FeaturesBar;
