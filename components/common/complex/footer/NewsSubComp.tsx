import React from "react";
import Image from "next/image";

import TitleText from "../../simple/title-text";
import EmailInput from "../../simple/email-input";

const NewsSubComp = () => {
  return (
    <div className="bg-white py-4 px-6 flex items-center justify-center space-x-28 rounded-xl">
      <TitleText sizes="2xl" text="Subscribe Newsletter" />

      <div className="flex items-center justify-start space-x-16">
        <EmailInput />
        <div className="flex space-x-6">
          <Image alt="Call Us" src="/call.svg" width={50} height={50} />
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-primary font-medium">Call us 24/7 :</p>
            <p className="text-sm text-primary font-medium">
              (+62) 0123 567 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSubComp;
