"use client";

import Image from "next/image";
import { useContext } from "react";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";

const DisplayOrder = () => {
  const { arrangement, setArrangement } = useContext(ProductsDisplayContext);

  return (
    <div className="flex rtl:flex-row-reverse items-center justify-start space-x-4 flex-1 pe-4">
      <button
        data-selected={arrangement === "one-per-row" || undefined}
        className="data-[selected]:border data-[selected]:border-black p-1"
        onClick={() => setArrangement("one-per-row")}
      >
        <Image alt="Image" src="/icons/menu.svg" width={30} height={30} />
      </button>

      <button
        data-selected={arrangement === "three-per-row" || undefined}
        className="data-[selected]:border data-[selected]:border-black p-1"
        onClick={() => setArrangement("three-per-row")}
      >
        <Image
          alt="Image"
          src="/icons/nine-display.svg"
          width={30}
          height={17}
        />
      </button>

      <button
        data-selected={arrangement === "two-per-row" || undefined}
        className="data-[selected]:border data-[selected]:border-black p-1"
        onClick={() => setArrangement("two-per-row")}
      >
        <Image
          alt="Image"
          src="/icons/four-display.svg"
          width={30}
          height={30}
        />
      </button>

      <button
        data-selected={arrangement === "four-per-row" || undefined}
        className="data-[selected]:border data-[selected]:border-black p-1"
        onClick={() => setArrangement("four-per-row")}
      >
        <Image
          alt="Image"
          src="/icons/twelve-display.svg"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default DisplayOrder;
