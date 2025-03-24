"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import { Range } from "react-range";

const PriceRange = () => {
  const t = useTranslations("ProductsPage.PriceRange");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        {t("title")}
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-center justify-start space-y-8 px-6">
        <Range
          label={t("label")}
          labelledBy={t("labelledBy")}
          step={1}
          min={0}
          max={200}
          values={[minPrice, maxPrice]}
          onChange={(values) => {
            setMinPrice(values[0]);
            setMaxPrice(values[1]);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "2px",
                width: "90%",
                backgroundColor: "#023E8A",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, value }) => (
            <div
              {...props}
              key={props.key}
              style={props.style}
              className="bg-[#023E8A] w-3 h-3 rounded-full"
            >
              <p className="absolute -bottom-7 left-0 text-[#023E8A] font-black text-lg">
                {value}
              </p>
            </div>
          )}
        />
      </div>

      <div className="pb-0" />
    </div>
  );
};

export default PriceRange;
