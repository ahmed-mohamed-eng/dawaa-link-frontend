"use client";
import React, { useState } from "react";

import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import ISingleProduct from "@/types/products/single-product.interface";

export interface HeroContentProps {
  products?: ISingleProduct[];
}

const HeroContent = (props: HeroContentProps) => {
  const t = useTranslations("HomePage");
  const footerT = useTranslations("FooterComponent");

  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("riyadh");

  const router = useRouter();

  const onSearchProduct = () => {
    if (!searchValue) {
      return;
    }

    const url = `/search?q=${searchValue}&location=${locationValue}`;

    router.push(url);
  };

  return (
    <div className="w-full flex flex-col relative">
      {/* Info */}
      <div className="w-full h-96 xl:h-[40rem] relative">
        <Image
          alt="Hero"
          className="rounded-3xl -z-50"
          src="/hero-image.png"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="h-full w-full flex flex-col items-start justify-center p-4 xl:px-48 font-bold">
          <div className="flex flex-col items-start justify-start space-y-2">
            <span>{t("heroCompanyName")}</span>
            <h1 className="text-3xl xl:text-5xl xl:w-[38rem] leading-tight">
              {t("heroMainContent")}
            </h1>
          </div>

          <p className="hidden xl:inline-block mt-2 w-full xl:w-[38rem] font-thin">
            {t("heroInfo")}
          </p>

          <div className="flex items-center justify-start space-x-6 xl:space-x-10 mt-9">
            <Link
              href="https://dawaa-link-dashboard.vercel.app/dawwaLink_dashboard/auth/register/company"
              className="bg-[#00A6FB] text-xs xl:text-base text-center text-white font-bold px-2 xl:px-8 py-2 xl:py-4 rounded-full"
            >
              {t("heroJoinButton")}
            </Link>

            {/* <div className="flex items-center justify-start space-x-2 xl:space-x-6">
              <button>
                <Image
                  className="hidden xl:block"
                  alt="Play Video"
                  src="/play-vid.svg"
                  width={50}
                  height={50}
                />

                <Image
                  className="block xl:hidden"
                  alt="Play Video"
                  src="/play-vid.svg"
                  width={30}
                  height={30}
                />
              </button>

              <span className="text-sm xl:text-base">Watch How It Works</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Advance Search */}
      <div className="w-full hidden xl:flex rtl:flex-row-reverse items-center justify-center relative -top-24">
        <div className="w-fit px-16 py-7 rounded-2xl shadow-md border bg-white">
          {/* Search Boxes */}
          <div className="w-full flex items-center justify-start ltr:space-x-5">
            {/* Product Search Box */}
            <div className="flex rtl:flex-row-reverse items-center bg-[#FAFBFE] rounded-xl px-6 py-3 space-x-4 border border-[#E3E3E3]">
              <Image
                alt="Search For Product"
                src="/search.svg"
                width={32}
                height={32}
              />

              <input
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    onSearchProduct();
                  }
                }}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="w-96 outline-none bg-inherit text-black"
                placeholder={t("AdvancedSearch.searchPlaceholder")}
              />
            </div>

            {/* Product Location Search Box */}
            <div className="flex rtl:mx-5 rtl:flex-row-reverse items-center bg-[#FAFBFE] rounded-xl px-6 py-3 space-x-4 border border-[#E3E3E3]">
              <Image
                alt="Search For Store Location"
                src="/location-pin.svg"
                width={18}
                height={28}
              />

              <select
                onChange={(e) => setLocationValue(e.target.value)}
                className="w-96 outline-none bg-inherit text-black"
              >
                <option value="riyadh">
                  {footerT("Services&Cities.locations.0")}
                </option>
                <option value="jeddah">
                  {footerT("Services&Cities.locations.1")}
                </option>
                <option value="mecca">
                  {footerT("Services&Cities.locations.2")}
                </option>
                <option value="medina">
                  {footerT("Services&Cities.locations.3")}
                </option>
                <option value="dammam">
                  {footerT("Services&Cities.locations.4")}
                </option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={onSearchProduct}
              className="bg-[#00A6FB] flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white"
            >
              {t("AdvancedSearch.searchButton")}
            </button>
          </div>

          {/* Quick Picks Tags */}
          <div className="mt-12 flex flex-col items-start justify-start space-y-6">
            <p className="text-black font-bold">
              {t("AdvancedSearch.suggestionText")}
            </p>

            <div className="flex rtl:flex-row-reverse items-center justify-start space-x-8">
              {/* Tags */}
              <div className="flex rtl:flex-row-reverse items-center justify-start space-x-6">
                {props.products?.slice(0, 5)?.map((val) => {
                  return (
                    <Link
                      key={uuid()}
                      href={`/products/${val.id}`}
                      className="font-bold bg-[#F3F6FD] px-5 py-2"
                    >
                      {val.name}
                    </Link>
                  );
                })}
              </div>

              {(props.products?.length || 0) > 6 ? (
                <button className="px-5 py-2 bg-[#FF922E] font-bold text-white">
                  {t("AdvancedSearch.moreBtn")}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
