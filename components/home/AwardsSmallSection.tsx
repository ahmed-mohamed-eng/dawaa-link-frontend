import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { Fragment } from "react";

const AwardsSmallSection = () => {
  const t = useTranslations("AboutUsPage.AwardsSmallSection");

  return (
    <div className="pb-10 xl:pb-40 w-full">
      <div className="w-full xl:px-20 flex flex-col items-start justify-start space-y-10 xl:space-y-24">
        {/* Header */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0">
          <div className="flex flex-col xl:flex-row items-center justify-start space-y-4 xl:space-y-0 xl:space-x-16">
            <h3 className="text-4xl font-bold">{t("title")}</h3>
            <p className="xl:w-[28rem] xl:px-11 xl:border-l border-[#565656] text-[#565656]">
              Morbi tristique, felis et ullamcorper fermentum, mi neque pulvinar
              mauris, nec viverra massa dui a lacus. Praesent lobortis nisi eget
              sapien aliquet bibendum.
            </p>
          </div>
          <Link
            href="/awards"
            className="font-bold text-lg text-white bg-[#023E8A] px-5 py-3 rounded-full"
          >
            {t("ourAwards")}
          </Link>
        </div>

        {/* Logos */}
        <div className="w-full grid grid-cols-2 gap-8 xl:flex xl:items-center xl:justify-between">
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
        className="hidden xl:block"
        alt="Company"
        src={imgSrc}
        width={200}
        height={50}
      />

      <Image
        className="block xl:hidden"
        alt="Company"
        src={imgSrc}
        width={100}
        height={25}
      />
    </Fragment>
  );
}
