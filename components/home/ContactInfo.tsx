"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const ContactInfo = () => {
  return (
    <div className="w-full rounded-t-2xl bg-[#081F48] text-white flex flex-col xl:flex-row items-center justify-center px-8 xl:px-0 py-8 xl:py-16 space-y-10 xl:space-y-0 xl:divide-x-2 xl:divide-[#707070]">
      <Toaster position="bottom-center" />

      {/* Physical Location */}
      <div className="xl:pr-32 font-bold text-3xl xl:text-4xl flex flex-col items-center justify-start space-y-4">
        <span className="text-sm">Appointment Available</span>
        <p>Whatsapp Number</p>
        <p>1200 - 256 - 48966</p>
      </div>

      {/* Icons */}
      <div className="xl:pl-32 font-bold grid grid-cols-2 gap-8">
        <IconItem
          imageSrc="/icons/house-round.svg"
          contents={["Address", "813 Howard Street , Oswego NY 13126, USA"]}
        />

        <IconItem
          imageSrc="/icons/phone-round.svg"
          contents={["Phone", "(+02) 258 987 4533", "(+02) 258 987 4533"]}
        />

        <IconItem
          imageSrc="/icons/email-round.svg"
          contents={["813Email", "Contact@Medical.Com"]}
        />

        <IconItem
          imageSrc="/icons/web-round.svg"
          contents={["Website", "Contact@Medical.Com"]}
        />
      </div>
    </div>
  );
};

export default ContactInfo;

type IconItemProps = {
  imageSrc: string;
  contents: string[];
};

function IconItem(props: IconItemProps) {
  const onCopyContent = (e: MouseEvent<HTMLParagraphElement>) => {
    const value = e.currentTarget.textContent;

    if (!navigator || !navigator?.clipboard) {
      return;
    }

    if (value) {
      navigator.clipboard.writeText(value);

      toast.success("Copied!");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row xl:space-x-8 space-y-3 xl:space-y-0">
      <Image
        className="hidden xl:block"
        alt="Physical Address"
        src={props.imageSrc}
        width={75}
        height={75}
      />

      <Image
        className="block xl:hidden"
        alt="Physical Address"
        src={props.imageSrc}
        width={40}
        height={40}
      />

      <div className="w-full xl:w-32 font-bold text-white space-y-1 xl:space-y-4">
        {props.contents.map((con) => {
          return (
            <p
              key={uuid()}
              className="w-full overflow-hidden text-ellipsis cursor-pointer"
              onClick={onCopyContent}
            >
              {con}
            </p>
          );
        })}
      </div>
    </div>
  );
}
