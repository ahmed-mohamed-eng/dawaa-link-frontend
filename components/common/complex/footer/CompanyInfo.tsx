import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyInfo = () => {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <Link href="/">
        <Image alt="Company" src="/company-logo.png" width={140} height={40} />
      </Link>

      <p className="text-primary w-48">
        64 st james boulevard hoswick , ze2 7zj
      </p>

      <div className="border-t border-black py-8 w-fit flex items-center justify-start space-x-8">
        <Link href="https://www.google.com">
          <Image
            alt="Google Account"
            src="/google.svg"
            width={20}
            height={20}
          />
        </Link>

        <Link href="https://www.google.com">
          <Image alt="Facebook" src="/facebook.svg" width={20} height={20} />
        </Link>

        <Link href="https://www.google.com">
          <Image
            alt="Meta Whatsapp"
            src="/whatsapp.svg"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
