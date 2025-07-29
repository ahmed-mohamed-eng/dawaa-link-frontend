import React from "react";
import Image from "next/image";

import { Link, usePathname } from "@/i18n/routing";

import {  useLocale } from "next-intl";


const LanguageSwitch = () => {
 const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        href={pathname}
        locale={locale === "ar" ? "en" : "ar"}
        className="flex rtl:flex-row-reverse items-center justify-center gap-3"
        title="Change Language"
      >
        {locale === "ar" ? (
          <Image
            alt="Change Language"
            src="/icons/flag-uk.svg"
            width={25}
            height={25}
            className="rounded-full"
          />
        ) : null}

        {locale === "en" ? (
          <Image
            alt="Change Language"
            src="/icons/flag-saudi.svg"
            width={25}
            height={25}
            className="rounded-full"
          />
        ) : null}
        <span className="uppercase">{locale === "ar" ? "en" : "ar"}</span>
      </Link>
    </div>
  );
};

export default LanguageSwitch;
