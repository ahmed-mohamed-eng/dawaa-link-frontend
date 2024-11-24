import React from "react";
import Link from "next/link";

import TitleText from "@/components/common/simple/title-text";
import NavCircles from "@/components/common/simple/nav-circles";
import ImgDisplayComp from "@/components/common/simple/img-display-comp";
import BorderedBox from "@/components/common/simple/bordered-box";

const NewsSection = () => {
  return (
    <div className="w-full flex flex-col space-y-8">
      <div className="w-full flex items-center justify-between">
        <TitleText sizes="lg" text="Latest News" />

        <Link href="/news" className="font-medium text-primary text-lg">
          View All
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 gap-x-4">
        <NewDisplayComp
          byFromName="By spacing tech"
          date="22,oct,2021"
          description="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
          imgURL="/product.png"
          title="Who avoids a pain that produces?"
        />
        <NewDisplayComp
          byFromName="By spacing tech"
          date="22,oct,2021"
          description="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
          imgURL="/product.png"
          title="Who avoids a pain that produces?"
        />
      </div>

      <NavCircles pageCount={3} />
    </div>
  );
};

type NewDisplayCompProps = {
  date: string;
  imgURL: string;
  title: string;
  description: string;
  byFromName: string;
};

function NewDisplayComp(props: NewDisplayCompProps) {
  return (
    <BorderedBox className="grid grid-cols-2 gap-x-4">
      <ImgDisplayComp sizes="lg" srcURL={props.imgURL} objectFit="cover" />

      <div className="flex flex-col justify-between space-y-4">
        <p className="border px-4 py-2 w-fit rounded-full text-[#1B5A7D] text-sm font-semibold">
          {props.date}
        </p>

        <TitleText sizes="xl" text={props.title} />

        <p className="text-[#1B5A7D] text-sm">{props.description}</p>

        <p className="text-[#1B5A7D] text-xs">{props.byFromName}</p>
      </div>
    </BorderedBox>
  );
}

export default NewsSection;
