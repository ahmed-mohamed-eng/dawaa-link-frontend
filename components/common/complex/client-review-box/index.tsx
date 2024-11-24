import React from "react";

import TitleText from "../../simple/title-text";
import BorderedBox from "../../simple/bordered-box";
import ImgDisplayComp from "../../simple/img-display-comp";

export interface ClientReviewBoxProps {
  clientName: string;
  clientImgURL: string;
  clientReview: string;
}

const ClientReviewBox = (props: ClientReviewBoxProps) => {
  return (
    <BorderedBox className="inline-block space-y-4 rounded-3xl">
      <div className="flex items-center justify-start space-x-8">
        <div className="p-1 border border-dashed border-secondary rounded-full">
          <ImgDisplayComp
            sizes="2xs"
            srcURL={props.clientImgURL}
            imgClassName="rounded-full"
          />
        </div>

        <TitleText sizes="lg" text={props.clientName} />
      </div>

      <div className="px-6 py-2 bg-[#E2F4FF] rounded-md">
        <p className="text-[#003F62] font-normal w-80 text-sm">
          {props.clientReview}
        </p>
      </div>
    </BorderedBox>
  );
};

export default ClientReviewBox;
