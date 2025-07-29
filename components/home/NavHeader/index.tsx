"use client";

import Image from "next/image";

import { Link } from "@/i18n/routing";

import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import LanguageSwitch from "./LanguageSwitch";
import NavigationList from "./NavigationList";

const NavHeader = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 xl:px-20 xl:py-8 gap-2 xl:gap-0">
      <Link href="/">
        <Image
          className="hidden xl:inline-block"
          alt="Welcome to DawaaLink"
          src="/dawwa-logo-trans.png"
          width={100}
          height={30}
        />

        <Image
          className="inline-block xl:hidden"
          alt="Welcome to DawaaLink"
          src="/dawwa-logo-trans.png"
          width={100}
          height={50}
        />
      </Link>

      <SearchBox />
      <NavigationList />
      <UserInfo />
      <LanguageSwitch />
    </nav>
  );
};

export default NavHeader;
