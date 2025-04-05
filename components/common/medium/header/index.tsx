import React from "react";
import { Link } from "@/i18n/routing";

import { HiOutlineMapPin, HiOutlineTruck } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="p-8 flex items-center justify-between">
      <div className="text-black">
        Need help ? Call us: {"("}+98{")"} 0234 456 789
      </div>

      <div className="flex items-center justify-start space-x-8">
        <Link
          href="/contact-us"
          className="flex items-center justify-start space-x-3"
        >
          <HiOutlineMapPin fontSize={20} />
          <p>Our store</p>
        </Link>

        <Link
          href="/orders"
          className="flex items-center justify-start space-x-3"
        >
          <HiOutlineTruck fontSize={20} />
          <p>Track your order</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
