"use client";

import Image from "next/image";
import { useContext } from "react";

import ProductsDisplayContext from "@/contexts/ProductsDisplayContext";

const DisplayOrder = () => {
  const { setArrangement } = useContext(ProductsDisplayContext);

  return (
    <div className="flex rtl:flex-row-reverse items-center justify-start space-x-7 rtl:p-4 ltr:pe-4 xl:pe-8 xl:py-5 flex-1">
      <button onClick={() => setArrangement("one-per-row")}>
        <Image alt="Image" src="/icons/menu.svg" width={21} height={17} />
      </button>

      <button onClick={() => setArrangement("three-per-row")}>
        <Image
          alt="Image"
          src="/icons/nine-display.svg"
          width={15}
          height={17}
        />
      </button>

      <button onClick={() => setArrangement("two-per-row")}>
        <Image
          alt="Image"
          src="/icons/four-display.svg"
          width={17}
          height={17}
        />
      </button>

      <button onClick={() => setArrangement("four-per-row")}>
        <Image
          alt="Image"
          src="/icons/twelve-display.svg"
          width={21}
          height={17}
        />
      </button>
    </div>
  );
};

export default DisplayOrder;
