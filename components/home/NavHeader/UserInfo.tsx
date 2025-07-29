import React from "react";
import Image from "next/image";

import { Link } from "@/i18n/routing";

import TokenName from "@/constants/TokenName";
import getCookie from "@/utils/auth/getCookie";

import CartIcon from "../CartIcon";

const UserInfo = () => {
  const accessToken = getCookie(TokenName);

  return (
    <div className="hidden xl:flex rtl:flex-row-reverse items-center justify-start gap-4">
      {accessToken ? <CartIcon /> : null}

      {/* User */}
      <div className="relative p-2">
        <Link href="/account">
          <Image
            alt="Go to Account"
            src="/account.svg"
            width={25}
            height={25}
          />
        </Link>
        {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
          4
        </span> */}
      </div>

      {/* Wishlist */}
      {accessToken ? (
        <div className="relative p-2">
          <Image alt="Go to Wishlist" src="/heart.svg" width={25} height={25} />
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
