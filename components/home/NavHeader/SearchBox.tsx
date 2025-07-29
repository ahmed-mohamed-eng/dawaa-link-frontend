import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Image from "next/image";
import { useRouter } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import useFetchSuggestions from "@/data-fetch-hooks/products/useFetchSuggestions";

const SearchBox = () => {
  const t = useTranslations("HeaderComponent");

  const [searchTxt, setSearchTxt] = useState<string>();

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
  );
};

export default SearchBox;
