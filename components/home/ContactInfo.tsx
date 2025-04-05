"use client";

import Image from "next/image";
import { MouseEvent } from "react";
import { v4 as uuid } from "uuid";
import { useTranslations } from "next-intl";
import { Toaster } from "react-hot-toast";
import { useRouter } from "@/i18n/routing";

const ContactInfo = () => {
  const t = useTranslations("HomePage.ContactInfo");

  const router = useRouter();

  const onOpenLocationPage = () => {
    router.push("/location");
  };

  const onOpenPhoneNumber = () => {
    window.open("https://api.whatsapp.com/send?phone=+022589874533", "_blank");
  };

  const onOpenEmail = () => {
    const email = {
      to: "Contact@Medical.Com",
      subject: "Inquiry",
      body: "Hello Dawwa, I would like to inquire about your services. Best regards, [Your Name]",
    };

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email.to}&su=${email.subject}&body=${email.body}`;

    window.open(url, "_blank");
  };

  return (
    <div className="w-full rounded-t-2xl bg-[#081F48] text-white flex rtl:flex-row-reverse flex-col xl:flex-row items-center justify-center px-8 xl:px-0 py-8 xl:py-16 space-y-10 xl:space-y-0 xl:divide-x-2 xl:divide-[#707070]">
      {/* Icons */}
      <div className="xl:pr-16 font-bold grid grid-cols-3 gap-8">
        <IconItem
          imageSrc="/icons/house-round.svg"
          contents={[t("address"), "813 Howard Street , Oswego NY 13126, USA"]}
          onClick={onOpenLocationPage}
        />

        <IconItem
          imageSrc="/icons/phone-round.svg"
          contents={[t("phone"), "(+02) 258 987 4533", "(+02) 258 987 4533"]}
          onClick={onOpenPhoneNumber}
        />

        <IconItem
          imageSrc="/icons/email-round.svg"
          contents={[t("email"), "Contact@Medical.Com"]}
          onClick={onOpenEmail}
        />

        <Toaster position="bottom-center" />
      </div>

      {/* Physical Location */}
      <div
        onClick={onOpenPhoneNumber}
        className="xl:pl-16 font-bold text-3xl flex flex-col items-center justify-start space-y-4"
      >
        <span className="text-sm">{t("description")}</span>
        <p>{t("title")}</p>
        <p>1200 - 256 - 48966</p>
      </div>
    </div>
  );
};

export default ContactInfo;

type IconItemProps = {
  imageSrc: string;
  contents: string[];
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
};

function IconItem(props: IconItemProps) {
  return (
    <div className="flex rtl:flex-row-reverse flex-col xl:flex-row xl:space-x-8 space-y-3 xl:space-y-0">
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
              onClick={props.onClick}
            >
              {con}
            </p>
          );
        })}
      </div>
    </div>
  );
}
