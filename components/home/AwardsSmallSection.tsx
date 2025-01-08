import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

const AwardsSmallSection = () => {
  return (
    <div className="pb-10 lg:pb-40 w-full">
      <div className="w-full lg:px-20 flex flex-col items-start justify-start space-y-10 lg:space-y-24">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center justify-start space-y-4 lg:space-y-0 lg:space-x-16">
            <h3 className="text-4xl font-bold">Our Awards</h3>
            <p className="lg:w-[28rem] lg:px-11 lg:border-l border-[#565656] text-[#565656]">
              Morbi tristique, felis et ullamcorper fermentum, mi neque pulvinar
              mauris, nec viverra massa dui a lacus. Praesent lobortis nisi eget
              sapien aliquet bibendum.
            </p>
          </div>
          <Link
            href="/awards"
            className="font-bold text-lg text-white bg-[#023E8A] px-5 py-3 rounded-full"
          >
            Our Awards
          </Link>
        </div>

        {/* Logos */}
        <div className="w-full grid grid-cols-2 gap-8 lg:flex lg:items-center lg:justify-between">

          <ImageItem imgSrc="/companies/vintage.svg" />
          <ImageItem imgSrc="/companies/burnfox.svg" />
          <ImageItem imgSrc="/companies/hanly.svg" />
          <ImageItem imgSrc="/companies/hential.svg" />
          <ImageItem imgSrc="/companies/extensive.svg" />

        </div>
      </div>
    </div>
  );
};

export default AwardsSmallSection;

type ImageItemProps = { imgSrc: string };
function ImageItem({ imgSrc }: ImageItemProps) {
  return (
    <Fragment>
      <Image
        className="hidden lg:block"
        alt="Company"
        src={imgSrc}
        width={200}
        height={50}
      />

      <Image
        className="block lg:hidden"
        alt="Company"
        src={imgSrc}
        width={100}
        height={25}
      />
    </Fragment>
  );
}
