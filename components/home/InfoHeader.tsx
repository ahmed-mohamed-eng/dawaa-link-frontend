import Image from "next/image";
import Link from "next/link";

const InfoHeader = () => {
  return (
    <header className="w-full bg-[#023E8A] text-white font-bold flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0  p-4 xl:px-20 xl:py-6 rounded-xl">
      {/* Navigation */}
      <div className="flex items-center justify-start divide-x-2 divide-white">
        <Link href="/shop" className="px-3">
          Shop
        </Link>
        <Link href="/collection" className="px-3">
          Collection
        </Link>
        <Link href="/blog" className="px-3">
          Blog
        </Link>
        <Link href="/contact-us" className="px-3">
          Contact
        </Link>
      </div>

      {/* Informer */}
      <p className="flex flex-col xl:flex-row xl:items-center space-y-4 xl:space-y-0 xl:space-x-4">
        <span className="text-sm">
          Serenity Medical Groupmain a communities together
        </span>
        <span className="px-4 xl:py-3 bg-[#00A6FB] rounded-3xl flex items-center justify-center text-xs xl:text-sm">
          New
        </span>
      </p>

      {/* Contact */}
      <div className="flex flex-col xl:flex-row items-center justify-center xl:divide-x-2 xl:divide-white">
        <Link
          href="mailto:medical.admin@email.com"
          className="space-x-4 flex items-center justify-start px-4"
          target="_blank"
        >
          <Image alt="Send Email" src="/mail.svg" width={15} height={10} />
          <span>medical.admin@email.com</span>
        </Link>

        <Link
          href="tel:+02-8567894563"
          className="space-x-4 flex items-center justify-start px-4"
          target="_blank"
        >
          <Image alt="Give Us a Call" src="/call.svg" width={15} height={14} />
          <span>+02-856 789 4563 </span>
        </Link>
      </div>
    </header>
  );
};

export default InfoHeader;
