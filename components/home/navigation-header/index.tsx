"use client";

import React from "react";
import OpenListNav from "@/components/common/medium/open-list-nav";

const NavigationHeader = () => {
  return (
    <div className="w-full px-8 flex items-center justify-between bg-slate-200">
      <div className="flex items-center justify-center space-x-12 font-semibold py-8 flex-1">
        <OpenListNav name="Home" url="/" />
        <OpenListNav name="Categories" url="/categories" />
        <OpenListNav name="Medicine" url="/categories/medicines" />
        <OpenListNav name="Cosmetics" url="/categories/cosmetics" />
        <OpenListNav
          name="Medical Equipments"
          url="/categories/medical-equipments"
        />
        <OpenListNav name="About Us" url="/about-us" />
        <OpenListNav name="Contact Us" url="/contact-us" />
      </div>
    </div>
  );
};

export default NavigationHeader;
