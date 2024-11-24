import React from "react";

import NewsSubComp from "./NewsSubComp";
import CompanyInfo from "./CompanyInfo";
import NavigationList from "./NavigationList";

const Footer = () => {
  return (
    <div className="bg-[#E2F4FF] px-16 py-10 flex flex-col space-y-12">
      <NewsSubComp />

      <div className="flex items-start justify-between">
        <CompanyInfo />
        <NavigationList
          title="Find product"
          items={[
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
          ]}
        />

        <NavigationList
          title="Find product"
          items={[
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
          ]}
        />

        <NavigationList
          title="Find product"
          items={[
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
            "Brownze arnold",
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
