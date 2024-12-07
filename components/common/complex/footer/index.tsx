import React from "react";

import CompanyInfo from "./CompanyInfo";

const Footer = () => {
  return (
    <div className="bg-[#E2F4FF] px-16 py-10 flex flex-col space-y-12">
      <div className="flex items-start justify-between">
        <CompanyInfo />
      </div>
    </div>
  );
};

export default Footer;
