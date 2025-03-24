"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

const Ratings = () => {
  const t = useTranslations("ProductsPage");

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-12">
      <p className="w-full px-5 py-3 bg-[#FF922E] text-white font-bold text-xl">
        {t("Ratings")}
      </p>

      {/* Picks */}
      <div className="w-full flex flex-col items-center justify-start space-y-8 px-6">
        <SinglePicks imageSrc="/rating-5.svg" />
        <SinglePicks imageSrc="/rating-4.svg" />
        <SinglePicks imageSrc="/rating-3.svg" />
        <SinglePicks imageSrc="/rating-2.svg" />
        <SinglePicks imageSrc="/rating-1.svg" />
      </div>
    </div>
  );
};

export default Ratings;

export interface SinglePicksProps {
  imageSrc: string;
}

function SinglePicks(props: SinglePicksProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full flex items-center justify-between">
      <Image alt="Rating Images" src={props.imageSrc} width={130} height={20} />
      <button
        data-selected={selected || undefined}
        className="w-5 h-5 rounded bg-[#D9D9D9] data-[selected]:bg-[#023E8A] text-white font-bold text-xl flex items-center justify-center"
        onClick={() => setSelected(!selected)}
      >
        {selected ? <p className="w-1 h-1 rounded-full bg-white" /> : null}
      </button>
    </div>
  );
}
