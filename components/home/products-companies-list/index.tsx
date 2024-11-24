import React from "react";

import Image from "next/image";

const ProductsCompaniesList = () => {
  return (
    <div className="bg-[#E2F4FF] px-4 py-8 flex items-center justify-evenly space-x-6">
      <Image alt="Company Name" src="/company.png" width={210} height={45} />
      <Image alt="Company Name" src="/company.png" width={210} height={45} />
      <Image alt="Company Name" src="/company.png" width={210} height={45} />
      <Image alt="Company Name" src="/company.png" width={210} height={45} />
      <Image alt="Company Name" src="/company.png" width={210} height={45} />
    </div>
  );
};

export default ProductsCompaniesList;
