"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";

import { useTranslations, useLocale } from "next-intl";

import useFetchSuggestions from "@/data-fetch-hooks/products/useFetchSuggestions";
import CartIcon from "./CartIcon";

const NavHeader = () => {
  const t = useTranslations("HeaderComponent");

  const [searchTxt, setSearchTxt] = useState<string>();

  const locale = useLocale();
  const pathname = usePathname();

  const { data: suggestions } = useFetchSuggestions(searchTxt);

  const router = useRouter();

  const onClickSearch = () => {
    if (!searchTxt) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchTxt)}`);
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    if (!searchTxt) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchTxt)}`);
  };

  const onClickSuggestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset["productId"] || "";

    if (!id) {
      return;
    }

    router.push(`/products/${id}`);
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 xl:px-20 xl:py-8 space-x-2 xl:space-x-0">
      <Link href="/">
        <Image
          className="hidden xl:inline-block"
          alt="Welcome to DawaaLink"
          src="/logo.svg"
          width={213}
          height={43}
        />

        <Image
          className="inline-block xl:hidden"
          alt="Welcome to DawaaLink"
          src="/logo.svg"
          width={100}
          height={30}
        />
      </Link>

      {/* Search Box */}
      <div className="relative w-2/3 xl:w-96 p-4 xl:px-8 xl:py-4 rounded-full flex rtl:flex-row-reverse items-center justify-between bg-[#F3F3F3]">
        <input
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={onPressEnter}
          type="text"
          className="w-[80%] bg-inherit outline-none text-sm xl:text-base"
          placeholder={t("product_search_placeholder")}
        />

        <button onClick={onClickSearch}>
          <Image
            className="hidden xl:inline-block"
            alt="Search For Product"
            src="/search.svg"
            width={20}
            height={20}
          />

          <Image
            className="inline-block xl:hidden"
            alt="Search For Product"
            src="/search.svg"
            width={15}
            height={15}
          />
        </button>

        {searchTxt && suggestions.length > 0 ? (
          <div className="absolute z-50 top-16 left-0 w-2/3 xl:w-96 p-4 xl:px-8 xl:py-4 rounded-xl flex flex-col items-start justify-start space-y-4 bg-[#F3F3F3]">
            {suggestions.map((sug) => {
              return (
                <button
                  onClick={onClickSuggestion}
                  data-product-id={sug.id}
                  className="w-full p-1 text-left text-lg capitalize"
                  key={uuid()}
                >
                  {sug.name}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* nav list */}
      <div className="hidden xl:flex rtl:flex-row-reverse items-center space-x-12 font-bold text-[#023E8A]">
        <Link
          href="/"
          data-selected={true}
          className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
        >
          {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
          <span>{t("home")}</span>
        </Link>
        <Link
          href="/about-us"
          data-selected={true}
          className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
        >
          {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
          <span>{t("aboutUs")}</span>
        </Link>
        <Link
          href="/products"
          data-selected={true}
          className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
        >
          {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
          <span>{t("products")}</span>
        </Link>
      </div>

      {/* User Info */}
      <div className="hidden xl:flex rtl:flex-row-reverse items-center justify-start space-x-4">
        <CartIcon />

        {/* User */}
        <div className="relative p-2">
          <Link href="/account">
            <Image
              alt="Go to Account"
              src="/account.svg"
              width={25}
              height={25}
            />
          </Link>
          {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
          4
        </span> */}
        </div>

        {/* Wishlist */}
        <div className="relative p-2">
          <Image alt="Go to Wishlist" src="/heart.svg" width={25} height={25} />
          {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
          4
        </span> */}
        </div>
      </div>

      {/* Language */}
      <div className="flex items-center justify-center space-x-4">
        <Link
          href={pathname}
          locale={locale === "ar" ? "en" : "ar"}
          className="flex rtl:flex-row-reverse items-center justify-center space-x-3"
          title="Change Language"
        >
          {locale === "ar" ? (
            <Image
              alt="Change Language"
              src="/icons/flag-uk.svg"
              width={25}
              height={25}
              className="rounded-full"
            />
          ) : null}

          {locale === "en" ? (
            <Image
              alt="Change Language"
              src="/icons/flag-saudi.svg"
              width={25}
              height={25}
              className="rounded-full"
            />
          ) : null}
          <span className="uppercase">{locale === "ar" ? "en" : "ar"}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavHeader;
